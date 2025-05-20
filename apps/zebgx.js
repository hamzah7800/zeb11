<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Zeb GX Browser</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: #121212;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100vh;
    }

    header {
      background: #1f1f1f;
      width: 100%;
      padding: 10px 20px;
      text-align: center;
      border-bottom: 2px solid #333;
    }

    header h1 {
      margin: 0;
      font-size: 1.5rem;
      color: #ff4747;
    }

    .note {
      margin: 20px;
      background: #222;
      padding: 15px;
      border-left: 4px solid #ff4747;
      max-width: 600px;
      text-align: center;
      border-radius: 8px;
    }

    .search-box {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .search-box input[type="text"] {
      padding: 10px;
      font-size: 16px;
      width: 90vw;
      max-width: 500px;
      border-radius: 5px;
      border: none;
      outline: none;
    }

    .search-box button {
      margin-top: 15px;
      padding: 10px 20px;
      font-size: 16px;
      background: #ff4747;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .search-box button:hover {
      background: #ff2a2a;
    }
  </style>
</head>
<body>

  <header>
    <h1>Zeb GX</h1>
  </header>

  <div class="note">
    <p><strong>Note:</strong> Zeb GX is a custom browser made by Hamzah. It is inspired by the clean and private look of DuckDuckGo, but this is a unique browser and not a copy of GX or DuckDuckGo.</p>
  </div>

  <div class="search-box">
    <form action="https://duckduckgo.com/" method="GET" target="_blank">
      <input type="text" name="q" placeholder="Search the web privately...">
      <button type="submit">Search</button>
    </form>
  </div>

</body>
</html>
