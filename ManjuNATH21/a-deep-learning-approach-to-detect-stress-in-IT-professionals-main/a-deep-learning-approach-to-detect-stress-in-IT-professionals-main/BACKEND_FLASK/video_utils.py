import cv2#type:ignore
import numpy as np#type:ignore
import tensorflow as tf#type:ignore
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_eye.xml')

# Load the Keras emotion recognition model
keras_model = tf.keras.models.load_model("C:\\Users\\kandu\\OneDrive\\Desktop\\flask_image_2\\emotion_detection_model_fer2013.h5")
emotions = ["Angry", "Disgust", "Fear", "Happy", "Sad", "Surprise", "Neutral"]

stress_detected_count = 0
no_stress_detected_count = 0

# Function to detect emotion from video feed
def detect_emotion():
    global stress_detected_count, no_stress_detected_count

    cap = cv2.VideoCapture(0)  # Capture video from default camera (index 0)

    if not cap.isOpened():
        print("Error: Could not open camera.")
        return

    while True:
        ret, frame = cap.read()
        if not ret:
            print("Error: Failed to retrieve frame from camera.")
            break

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3, 5)

        stress_detected = False

        for (x, y, w, h) in faces:
            roi_gray =gray[y:y+h, x:x+w]
            roi_color = frame[y:y+h, x:x+w]

            face_img_rgb = cv2.cvtColor(roi_color, cv2.COLOR_BGR2RGB)
            face_img_rgb_resized = cv2.resize(face_img_rgb, (48, 48))
            face_img_rgb_resized = face_img_rgb_resized.reshape(1, 48, 48, 3).astype('float32') / 255

            emotion_preds = keras_model.predict(face_img_rgb_resized)

            dominant_emotion_index = emotion_preds.argmax()
            dominant_emotion = emotions[dominant_emotion_index]

            if dominant_emotion in ["Angry", "Disgust", "Fear", "Sad"]:
                stress_detected = True

            # Draw rectangle around the face
            cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)

            eyes = eye_cascade.detectMultiScale(roi_gray)
            for (ex, ey, ew, eh) in eyes:
                cv2.rectangle(roi_color, (ex, ey), (ex+ew, ey+eh), (0, 255, 0), 2)

        if stress_detected:
            stress_detected_count += 1
            print("STRESS DETECTED")
        else:
            no_stress_detected_count += 1
            print("NO STRESS DETECTED")

        cv2.putText(frame, f"Stress Detected Count: {stress_detected_count}", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        cv2.putText(frame, f"No Stress Detected Count: {no_stress_detected_count}", (50, 150), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
        
        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()
    cv2.destroyAllWindows()
def get_result():
    if stress_detected_count > no_stress_detected_count:
        return {"result": "STRESS DETECTED"}
    else:
        return {"result": "NO STRESS DETECTED"}