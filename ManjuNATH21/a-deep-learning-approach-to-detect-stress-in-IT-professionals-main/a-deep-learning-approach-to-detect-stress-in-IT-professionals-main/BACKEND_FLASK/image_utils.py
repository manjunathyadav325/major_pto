
import tensorflow as tf#type:ignore
import numpy as np#type:ignore
import cv2#type:ignore
import os
model = tf.keras.models.load_model("C:\\Users\\kandu\\OneDrive\\Desktop\\flask_image_2\\emotion_detection_model_fer2013.h5")

# Define the input size expected by the model
input_width, input_height = (48, 48)

def preprocess_image(image):
    # Resize the image to match the input size expected by the model
    image = cv2.resize(image, (input_width, input_height))
    # Convert grayscale to RGB
    image = cv2.cvtColor(image, cv2.COLOR_GRAY2RGB)
    # Normalize pixel values (optional, depends on how the model was trained)
    image = image / 255.0
    # Convert to numpy array and add batch dimension
    image = np.expand_dims(image, axis=0)   # Add batch dimension
    return image

# Define a function for interpreting model predictions
def interpret_predictions(predictions):
    # Example: Convert numerical predictions into human-readable labels
    emotion_labels = ["Angry", "Disgust", "Fear", "Happy", "Sad", "Surprise", "Neutral"]
    predicted_emotion_index = np.argmax(predictions)
    predicted_emotion = emotion_labels[predicted_emotion_index]
    return predicted_emotion

# Define a function for determining stress detection
def detect_stress(emotion):
    positive_emotions = ["Happy", "Surprise", "Neutral"]
    if emotion in positive_emotions:
        return "NO STRESS DETECTED"
    else:
        return "STRESS DETECTED"