import os

import pyaudio#type:ignore
import numpy as np#type:ignore
import soundfile as sf#type:ignore
import librosa#type:ignore
from tensorflow.keras.models import load_model#type:ignore


# Define function to extract features from audio
def extract_feature(data, sr, mfcc=True, chroma=True, mel=True):
    if chroma:
        stft = np.abs(librosa.stft(data))
    result = np.array([])
    if mfcc:
        mfccs = np.mean(librosa.feature.mfcc(y=data, sr=sr, n_mfcc=40).T, axis=0)
        result = np.hstack((result, mfccs))
    if chroma:
        chroma = np.mean(librosa.feature.chroma_stft(S=stft, sr=sr).T, axis=0)
        result = np.hstack((result, chroma))
    if mel:
        mel = np.mean(librosa.feature.melspectrogram(y=data, sr=sr).T, axis=0)
        result = np.hstack((result, mel))
    return result

