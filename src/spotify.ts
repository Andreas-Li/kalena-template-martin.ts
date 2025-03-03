const encodedCredentials = btoa(`${client_id}:${client_secret}`);

const authentication = await fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    "Authorization": `Basic ${encodedCredentials}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({ grant_type: "client_credentials" }),
});

const data = await authentication.json();

const yolo = await fetch(
  "https://api.spotify.com/v1/playlists/15sZyUgStYmvzm3QfdVDIp?si=1525cc685e914359",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.access_token}`,
    },
  },
);

const nein = await yolo.json();

const tracks = nein.tracks?.items.map((item) => ({
  id: item.track?.id,
  name: item.track?.name,
}));

console.log(tracks);
