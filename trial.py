import csv
import pandas as pd

from flask import Flask, render_template
from browser import document, console, window

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# import spotipy
# from spotipy.oauth2 import SpotifyOAuth

# #spotify log in info
# sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id="4af1046a38804347b0b5b3c547851ec8",
#                                                client_secret="9cac3827b817482aa8cebf9af4b0852a",
#                                                redirect_uri="https://open.spotify.com/?flow_ctx=59a4fb55-d6db-4f15-9f00-51fa568844bb%3A1712454127&creation_point=https%3A%2F%2Fdeveloper.spotify.com%2F%3Fsp_cid%3D43a918fd8e24da3f08cb33b6c20cdfe5",
#                                                scope="playlist-modify-public"))

# Load the dataset
# df = pd.read_csv('top1000_songs.csv', skiprows=0)


def filter_songs(choice):
    df = pd.read_csv('top1000_songs.csv', skiprows=0)
    # print("Select the filter you would like to apply:")
    # print("1. Danceability")
    # # column 5
    # print("2. Tempo")
    # # 14
    # print("3. Oldies")
    # # 17
    # print("4. Energy")
    # # column 6
    # print("5. Happy/ Upbeat")
    # # column 13
    # print("6. New Tracks")
    # #17
    # choice = input("Enter your choice (1-6): ")

    if choice == '1':
        # threshold = float(input("Enter the minimum danceability (0.0 - 1.0): "))
        # filtered_songs = df[df['Danceability'] > threshold]
        df_sorted = df.sort_values(df.columns[5], ascending=False)
        filtered_songs = df_sorted.head(30)    
    
    elif choice == '2':
        ascending = input("Sort by tempo ascending or descending? (asc/desc): ")
        if ascending == 'asc':
            filtered_songs = df.sort_values(df.columns[14])
        else:
            filtered_songs = df.sort_values(df.columns[14], ascending=False)
    
    elif choice == '3':
     
        df_sorted = df.sort_values(df.columns[17])
        filtered_songs = df_sorted.head(30)
    
    elif choice == '4':
        # threshold = float(input("Enter the minimum energy (0.0 - 1.0): "))
        # filtered_songs = df[df['Energy'] > threshold]
        
        df_sorted = df.sort_values(df.columns[6], ascending=False)
        filtered_songs = df_sorted.head(30)
    
    elif choice == '5':
        df_sorted = df.sort_values(df.columns[13], ascending=False)
        filtered_songs = df_sorted.head(30)
        
    elif choice == '6':
        df_sorted = df.sort_values(df.columns[17], ascending=False)
        filtered_songs = df_sorted.head(30)
    
    else:
        print("Invalid choice. Showing the first few rows of the dataset.")
        filtered_songs = df.head()

    return filtered_songs

# Main function to run the program
def main():
    #  while True:
         filtered_songs = filter_songs(df)
         print(filtered_songs.iloc[:30, 1:2]) #song names
         print(filtered_songs.iloc[:30, 2:3]) # artists
        
#         another_filter = input("Would you like to apply another filter? (yes/no): ")
#         if another_filter.lower() != 'yes':
#             break
# source myprojectenv/bin/activate
if __name__ == "__main__":
     main()
