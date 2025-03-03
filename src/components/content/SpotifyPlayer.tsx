import type { FC, JSX } from "@kalena/framework";
const data = [
  { id: "5FTCKvxzqy72ceS4Ujux4N", name: "What's My Name?" },
  { id: "4E5P1XyAFtrjpiIxkydly4", name: "Replay" },
  { id: "0CAfXk7DXMnon4gLudAp7J", name: "Low (feat. T-Pain)" },
  {
    id: "3ZFTkvIE7kyPt6Nu3PEa7V",
    name: "Hips Don't Lie (feat. Wyclef Jean)",
  },
  { id: "1hGy2eLcmC8eKx7qr1tOqx", name: "Beautiful Girls" },
  { id: "3E7dfMvvCLUddWissuqMwr", name: "Party In The U.S.A." },
  { id: "2PpruBYCo4H7WOBJ7Q2EwM", name: "Hey Ya!" },
  {
    id: "3bidbhpOYeV4knp8AIu8Xn",
    name: "Can't Hold Us (feat. Ray Dalton)",
  },
  { id: "0HPD5WQqrq7wPWR7P7Dw1i", name: "TiK ToK" },
  { id: "2CEgGE6aESpnmtfiZwYlbV", name: "Dynamite" },
  {
    id: "5rb9QrpfcKFHM1EUbSIurX",
    name: "Yeah! (feat. Lil Jon & Ludacris)",
  },
  { id: "5A6OHHy73AR5tLxgTc98zz", name: "Black and Yellow" },
  { id: "2bLqfJjuC5syrsgDsZfGmn", name: "The Way I Are" },
  { id: "60PAzFNW3vAiAiVK6DRJfB", name: "Day 'N' Nite (Nightmare)" },
  { id: "66TRwr5uJwPt15mfFkzhbi", name: "Crank That (Soulja Boy)" },
  { id: "3oDFtOhcN08qeDPAK6MEQG", name: "Boom Boom Pow" },
  { id: "1dzQoRqT5ucxXVaAhTcT0J", name: "Just Dance" },
  { id: "0C4ejWmOTMv8vuYj85mf8m", name: "S&M" },
  { id: "1QV6tiMFM6fSOKOGLMHYYg", name: "Poker Face" },
  {
    id: "4QNpBfC0zvjKqPJcyqBy9W",
    name: "Give Me Everything (feat. Nayer)",
  },
  { id: "4kTPMugolDNVxnLDGk5tV6", name: "Party Rock Anthem" },
  {
    id: "557un1HgwYMuqfWGSTmnxw",
    name: "Single Ladies (Put a Ring on It)",
  },
  { id: "1CZOrmHUUjeDP7N2B4Ba6S", name: "Bad Romance" },
  { id: "0GX5oOKtU0nnx5OkhenW2i", name: "Closer" },
  {
    id: "43DNr9E3SWtDHbPknoQmGB",
    name: "LoveHate Thing - Sped Up Version",
  },
  { id: "0Oe49j06Bjrxs8PltuVeaW", name: "On The Floor - Radio Edit" },
  { id: "0ByMNEPAPpOR5H69DVrTNy", name: "Don't Stop The Music" },
  { id: "0O45fw2L5vsWpdsOdXwNAR", name: "SexyBack (feat. Timbaland)" },
  { id: "1hMmohpxxovn1ZlLXLwNOU", name: "Say It With Your Chest" },
  { id: "3MjUtNVVq3C8Fn0MP3zhXa", name: "...Baby One More Time" },
  {
    id: "7pYfyrMNPn3wtoCyqcTVoI",
    name: 'Moves Like Jagger - Studio Recording From "The Voice" Performance',
  },
  { id: "20I6sIOMTCkB6w7ryavxtO", name: "Call Me Maybe" },
  {
    id: "7LA6P6xlqfGbVyVI5tA9H6",
    name: "Money on Me - Gold Over America Tour Mix",
  },
  { id: "3bC1ahPIYt1btJzSSEyyrF", name: "Whistle" },
  { id: "2q4rjDy9WhaN3o9MvDbO21", name: "Kiss Me Thru The Phone" },
  { id: "7iL6o9tox1zgHpKUfh9vuC", name: "In Da Club" },
  { id: "5D2mYZuzcgjpchVY1pmTPh", name: "Candy Shop" },
  { id: "3AYcyxEACnmE6d96RPubID", name: "Thrift Shop (feat. Wanz)" },
  { id: "5l3CML2OnzfNs5RfVgbcLt", name: "Talk Dirty (feat. 2 Chainz)" },
  { id: "14blxrgE0VWAgv5aF2wWmx", name: "Good Life" },
  { id: "6b8Be6ljOzmkOmFslEb23P", name: "24K Magic" },
  { id: "2CvOqDpQIMw69cCzWqr5yr", name: "Halo" },
  { id: "1XGmzt0PVuFgQYYnV2It7A", name: "Payphone" },
  { id: "7EQGXaVSyEDsCWKmUcfpLk", name: "Die Young" },
  { id: "386RUes7n1uM1yfzgeUuwp", name: "The Lazy Song" },
  { id: "7xn4QcdEGKTRIEzcbEZ6ZW", name: "Summertime" },
  { id: "6cpk00i5TxCqSeqNi2HuIe", name: "One More Night" },
  {
    id: "7wMq5n8mYSKlQIGECKUgTX",
    name: "Hall of Fame (feat. will.i.am)",
  },
  {
    id: "5rgy6ghBq1eRApCkeUdJXf",
    name: "We Are Young (feat. Janelle Monáe)",
  },
  { id: "0KAiuUOrLTIkzkpfpn9jb9", name: "Drive By" },
  { id: "7ElF5zxOwYP4qVSWVvse3W", name: "Break Your Heart" },
  {
    id: "4356Typ82hUiFAynbLYbPn",
    name: "DJ Got Us Fallin' In Love (feat. Pitbull)",
  },
  { id: "4h8VwCb1MTGoLKueQ1WgbD", name: "Wake Me Up" },
  { id: "6GDJDe3I7yHq4rPDTfuJMj", name: "Rhythm Is A Dancer" },
  { id: "0DiWol3AO6WpXZgp0goxAV", name: "One More Time" },
  { id: "3Dzso9Q2WwupEclqgxBZht", name: "Pumped Up Kicks" },
  { id: "3JTRosAuKi5dFUNL0GNAdU", name: "Dancing In The Moonlight" },
  { id: "2tpWsVSb9UEmDRxAl1zhX1", name: "Counting Stars" },
  {
    id: "1qDrWA6lyx8cLECdZE7TV7",
    name: "Somebody That I Used To Know",
  },
  { id: "4HlFJV71xXKIGcU3kRyttv", name: "Hey, Soul Sister" },
  { id: "67WTwafOMgegV6ABnBQxcE", name: "Some Nights" },
  { id: "0ntQJM78wzOLVeCUAW7Y45", name: "Sex on Fire" },
  { id: "6F5c58TMEs1byxUstkzVeM", name: "Roar" },
  {
    id: "7sziTn5nHwrWf4K7gISaaU",
    name: "Summer Paradise (feat. Sean Paul) - Single Version",
  },
  { id: "1aaCRoyMFr6FL2RH4vtEGW", name: "Hot N Cold" },
  { id: "0n4bITAu0Y0nigrz3MFJMb", name: "Blurred Lines" },
  { id: "4fzsfWzRhPawzqhX8Qt9F3", name: "Stronger" },
  { id: "31I3Rt1bPa2LrE74DdNizO", name: "Flashing Lights" },
  { id: "5jrdCoLpJSvHHorevXBATy", name: "Dark Horse" },
  { id: "3l7QV3BFDCSPieo2YWSEAO", name: "Good Cry" },
  { id: "2vwlzO0Qp8kfEtzTsCXfyE", name: "Wrecking Ball" },
  { id: "4RXpgGM7A4Hg7cFBoH5KyF", name: "Hey Brother" },
  { id: "4mv20rLhudA059fmcGWkQJ", name: "Be My Lover" },
  { id: "2iJuuzV8P9Yz0VSurttIV5", name: "Scream & Shout" },
  { id: "3vMpBINQtBeII77x5TAZOQ", name: "SexyBack" },
  { id: "2gb95RFKmkENznqzuR976c", name: "Swalla" },
  { id: "7pkTm38dEoB2ff1tDErRy0", name: "Sexy And I Know It" },
  { id: "2gZUPNdnz5Y45eiGxpHGSc", name: "POWER" },
  { id: "22UDw8rSfLbUsaAGTXQ4Z8", name: "American Boy" },
  { id: "2l2KQDu4v7D69Ed9kA0O9s", name: "THE BADDEST" },
  { id: "1yJ5fyqBusR7Verj8JGsKV", name: "Miss Independent" },
  { id: "78TTtXnFQPzwqlbtbwqN0y", name: "FourFiveSeconds" },
  { id: "4esOae7i4rqTbAu9o5Pxco", name: "Girl on Fire" },
  { id: "1oQZk2bKBLgP1cbuFKvjkq", name: "If I Were a Boy" },
  { id: "5T7ZFtCcOgkpjxcuaeZbw0", name: "Best Song Ever" },
  { id: "1kPpge9JDLpcj15qgrPbYX", name: "Good Time" },
  { id: "7yH9SbrDQfNIh89ACCR7Ib", name: "King" },
  { id: "4tKGFmENO69tZR9ahgZu48", name: "Murder On The Dancefloor" },
  { id: "286TLtk120rnrmVeQClDTc", name: "Walking On A Dream" },
  { id: "1L5tZi0izXsi5Kk5OJf4W0", name: "Rehab" },
  { id: "30FURVTCpbKyykjSEQzGkH", name: "Back To Black" },
  { id: "1RKUoGiLEbcXN4GY4spQDx", name: "Clint Eastwood" },
  { id: "1vxw6aYJls2oq3gW0DujAo", name: "Crazy" },
  { id: "6I9VzXrHxO9rA9A5euc8Ak", name: "Toxic" },
  { id: "2OhhNGnu3nMZ7oLzECqZ0P", name: "How Deep Is Your Love" },
  { id: "4TsmezEQVSZNNPv5RJ65Ov", name: "Pon de Replay" },
  { id: "1PS1QMdUqOal0ai3Gt7sDQ", name: "Gold Digger" },
  { id: "1Z7ZNSCs14ly5a7rcivNRZ", name: "Silent Treatment" },
  {
    id: "3FNy4yzOhHhFBeA5p4ofoq",
    name: "Young, Wild & Free (feat. Bruno Mars)",
  },
  { id: "5Z17OvEyNDFmZQqzQtXcMi", name: "Body Language" },
];

type Props = JSX.IntrinsicElements["div"];
export const SpotifyPlayer: FC<Props> = ({ ...props }) => {
  const toRender = data[Math.floor(Math.random() * data.length)];

  return (
    <div id="everything" {...props}>
      <form hx-post="/endepunkt" hx-swap="none">
        <select
          id="trackSelect"
          class="border-2 border-gray-300 rounded-lg p-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          name="trackId"
        >
          {data.sort((a, b) =>
            a.name.localeCompare(b.name, "en", { sensitivity: "base" })
          ).map((track) => (
            <option
              key={track.id}
              value={track.id}
              class="py-2 px-4 text-gray-700 hover:bg-gray-100"
            >
              {track.name}
            </option>
          ))}
        </select>

        <input
          name="correct"
          x-cloak
          x-show={false}
          value={toRender?.id}
        />

        <input
          type="submit"
          value="Submit"
          class="text-white font-semibold py-2 px-4 rounded-lg bg-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </form>

      <div id="response"></div>

      <iframe
        src={`https://open.spotify.com/embed/track/${toRender?.id}`}
        frameBorder="0"
        title="Spotify Player"
        className="w-full h-full"
        style={{
          clipPath: "inset(20% 0 0 96.5%)",
        }}
      />
    </div>
  );
};
