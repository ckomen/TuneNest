# TuneNest

TuneNest is a modern web-based music player application that allows users to search for songs, create playlists, and enjoy seamless music playback. The app integrates with an external music API to fetch song data and delivers a sleek, user-friendly experience.

---

## Features

### Core Functionality

1. **Search for Songs**:
   - Users can search for songs by title, artist, or album.
   - Fetches results dynamically from an external API.

2. **Play Music**:
   - Plays selected tracks with a responsive playback control interface (play, pause, next, previous).

3. **Create and Manage Playlists**:
   - Add songs to custom playlists for personalized listening.
   - Remove songs or clear playlists.

4. **Album Art Display**:
   - Displays album art along with song metadata such as title and artist.

### Bonus Features

1. **Audio Visualization**:
   - Adds a visualizer to make the listening experience more engaging.

2. **Favorite Tracks**:
   - Users can mark tracks as favorites and access them in a separate list.

3. **Dark Mode**:
   - Toggle between light and dark themes for a customized look.

4. **Responsive Design**:
   - Optimized for both desktop and mobile devices.

---

## Installation and Setup

### Prerequisites

1. **Node.js and npm**:
   Ensure Node.js and npm are installed. Download from [Node.js Official Site](https://nodejs.org/).

### Steps to Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd grooveplay
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## API Integration

GroovePlay integrates with a music API (e.g., [Deezer API](https://developers.deezer.com/) or [Spotify API](https://developer.spotify.com/)). Ensure you have an API key to enable functionality.

### Example API Endpoint

- **Search for Tracks**:
  ```
  GET /search?q=<query>
  ```
  Response:
  ```json
  {
    "data": [
      {
        "id": "3135556",
        "title": "Shape of You",
        "artist": { "name": "Ed Sheeran" },
        "album": { "title": "Divide", "cover": "https://linktoalbumcover.jpg" },
        "preview": "https://linktoaudio.mp3"
      },
      ...
    ]
  }
  ```

---

## File Structure

- **index.html**: The main HTML file for the application layout.
- **style.css**: Contains styles for the application UI.
- **script.js**: Manages DOM manipulation, event handling, and API interactions.

---

## How It Works

1. **Search and Fetch**:
   - Users input a search term, and the app fetches matching songs from the external API.

2. **Song Playback**:
   - Handles audio playback using the HTML5 `<audio>` element.

3. **Playlist Management**:
   - Adds songs to a playlist by storing data in the browser’s local storage.

4. **Dynamic UI Updates**:
   - Updates the DOM dynamically to reflect user actions like adding songs or switching tracks.

---

## Possible Enhancements

1. **User Authentication**:
   - Integrate with a third-party API for user accounts to save playlists across devices.

2. **Offline Mode**:
   - Allow users to download tracks for offline playback.

3. **Multi-Language Support**:
   - Provide translations for a global audience.

---

## License

This project is licensed under the MIT License. Feel free to modify and use it as needed.

---

## Author

Developed by Caren Komen.


