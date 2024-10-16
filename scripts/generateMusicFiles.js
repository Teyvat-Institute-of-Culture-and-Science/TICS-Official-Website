const fs = require('fs');
const path = require('path');

const MUSIC_DIR = path.join(__dirname, '..', 'public', 'music');
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'music-files.json');

function generateMusicFiles() {
  const files = fs.readdirSync(MUSIC_DIR);
  const musicFiles = files
    .filter(file => ['.mp3', '.m4a', '.wav', '.flac'].includes(path.extname(file).toLowerCase()))
    .map(file => {
      const baseName = path.basename(file, path.extname(file));
      const lrcFile = `${baseName}.lrc`;
      return {
        fileName: file,
        hasLyrics: files.includes(lrcFile)
      };
    });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(musicFiles, null, 2));
  console.log(`音乐文件列表（包含歌词信息）已写入 ${OUTPUT_FILE}`);
}

generateMusicFiles();