from flask import Flask, request, jsonify, render_template,Response,session, redirect, url_for #type:ignore
import tensorflow as tf#type:ignore
from flask_cors import CORS#type:ignore
import numpy as np#type:ignore
import pyaudio#type:ignore
import cv2#type:ignore
import os#type:ignore
import jwt#type:ignore
from datetime import datetime, timedelta
from image_utils import  preprocess_image,interpret_predictions,detect_stress
from video_utils import detect_emotion,get_result
from audio_utils import extract_feature
from flask_pymongo import PyMongo#type:ignore
from tensorflow.keras.models import load_model#type:ignore
import soundfile as sf#type:ignore
from time import time
app = Flask(__name__)
CORS(app, origins='http://localhost:3000')
#audio_related
emotion_model = load_model("C:\\Users\\kandu\\OneDrive\\Desktop\\flask_image_2\\cnnaudio2 (1).h5")
emotions = {
    '0': 'neutral',
    '1': 'calm',
    '2': 'happy',
    '3': 'sad',
    '4': 'angry',
    '5': 'fearful',
    '6': 'disgust',
    '7': 'surprised'
}
RECORDINGS_DIR = "recordings"
os.makedirs(RECORDINGS_DIR, exist_ok=True)

model = tf.keras.models.load_model("C:\\Users\\kandu\\OneDrive\\Desktop\\flask_image_2\\emotion_detection_model_fer2013.h5")
# Load the trained emotion detection model
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 44100
CHUNK = 1024

# Initialize variables for recording
stream = None
is_recording = False
frames = []


@app.route('/')
def index():
    return "Hello"
# Flask backend route for handling image prediction requests
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    if file:
        image = cv2.imdecode(np.fromstring(file.read(), np.uint8), cv2.IMREAD_GRAYSCALE)
        input_image = preprocess_image(image)
        predictions = model.predict(input_image)
        predicted_emotion = interpret_predictions(predictions)
        stress_detection = detect_stress(predicted_emotion)
        
        # Save the image temporarily
        image_path = 'static/uploaded_image.jpg'
        cv2.imwrite(image_path, image)
        
        # Return the predictions as JSON data
        return jsonify({
            'predicted_emotion': predicted_emotion,
            'stress_detection': stress_detection,
            'image_url': image_path
        })


# Route for video feed
@app.route('/video_feed')
def video_feed():
    return Response(detect_emotion(), mimetype='multipart/x-mixed-replace; boundary=frame')

# Route for displaying result
@app.route('/result',methods=['POST'])
def result():
    return jsonify(get_result())




@app.route('/record', methods=['POST'])
def record():
    global is_recording
    global frames
    global stream

    if is_recording:
        # Stop recording
        is_recording = False

        if stream is not None:
            # Stop and close the audio stream
            stream.stop_stream()
            stream.close()
            stream = None

            # Save the recorded audio
            filename = os.path.join(RECORDINGS_DIR, f"recording_{int(time())}.wav")
            with sf.SoundFile(filename, mode='x', samplerate=RATE, channels=CHANNELS) as file:
                for frame in frames:
                    file.write(frame)

            # Perform emotion detection
            data, sr = sf.read(filename)
            features = extract_feature(data, sr)
            features = features.reshape(1, -1)  # Reshape features to match model input shape
            emotion_label = np.argmax(emotion_model.predict(features), axis=1)[0]
            emotion = emotions[str(emotion_label)]

            # Determine stress based on emotion
            if emotion in ['sad', 'angry', 'disgust', 'fearful']:
                stress = "Stress Detected"
            else:
                stress = "No Stress Detected"

            # Clear the frames list
            frames.clear()

            return jsonify({'status': 'Recording stopped', 'emotion': emotion, 'stress': stress})

        return jsonify({'status': 'Recording stopped'})

    else:
        # Start recording
        is_recording = True
        frames.clear()

        # Initialize PyAudio
        audio = pyaudio.PyAudio()

        # Open audio stream for recording
        stream = audio.open(format=FORMAT, channels=CHANNELS,
                            rate=RATE, input=True,
                            frames_per_buffer=CHUNK)

        print("Recording started.")
        return jsonify({'status': 'Recording started'})


app.config['SECRET_KEY'] = 'your_secret_key'  # Change this to a secure secret key
app.config['MONGO_URI'] = 'mongodb://localhost:27017/usersdb'  # Change this to your MongoDB URI



mongo = PyMongo(app)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Insert new user into the users collection
    mongo.db.users.insert_one({
        'username': username,
        'email': email,
        'password': password
    })

    return jsonify({'message': 'User created successfully'}), 201


# Signin route
@app.route('/signin', methods=['POST'])
def signin():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Check if user exists and password matches
    user = mongo.db.users.find_one({'username': username, 'password': password})
    if user:
        # Generate JWT token
        token = jwt.encode({'username': username, 'exp': datetime.utcnow() + timedelta(hours=1)}, app.config['SECRET_KEY'])
        return jsonify({'token': token})

    return jsonify({'message': 'Invalid username or password'}), 401
@app.route('/logout', methods=['POST'])
def logout():
    # Clear the user's session data
    session.clear()
    return redirect(url_for('index'))
if __name__ == '__main__':
    app.run(debug=True)
