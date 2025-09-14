export default function Entourage() {
  return (
    <div className="w-screen min-h-screen p-6 flex flex-col items-center">
      <h1 className="font-garamond  text-3xl font-bold text-gray-700 mb-6 text-center">
        Wedding Entourage
      </h1>

      <div className="max-w-2xl w-full space-y-6">
        {/* Parents */}
        <div className="text-center space-y-1">
          <h2 className="text-lg font-garamond font-semibold text-gray-600">
            Parents of the Groom
          </h2>
          <p className="text-gray-700">Mr. Nelson Isaac</p>
          <p className="text-gray-700">Mrs. Lesly Isaac</p>
        </div>

        <div className="text-center space-y-1">
          <h2 className="text-lg font-garamond font-semibold text-gray-600">
            Parents of the Bride
          </h2>
          <p className="text-gray-700">Mr. Arnel Austria</p>
          <p className="text-gray-700">Mrs. Marivic Austria</p>
          <p className="text-gray-700">Mrs. Remedios Austria (Grandmother)</p>
        </div>

        {/* Principal Sponsors */}
        <div>
          <h2 className="text-lg font-garamond font-semibold text-gray-600 mb-2 text-center">
            Principal Sponsors
          </h2>
          <div className="grid grid-cols-2  gap-y-1 text-center">
            {[
              "Mr. Steven Aquino",
              "Mrs. Maura Tacderas",
              "Mr. Roiland Tandang",
              "Mrs. Angelita Tatlonghari",
              "Mr. Edwin Mudlong",
              "Mrs. Mary Joan De Jesus",
              "Mr. Shervin Barotea",
              "Mrs. Lennie Delos Santos",
              "Mr. Jonathan Siytiap",
              "Mrs. Cheche Catindig",
              "Mr. Benny Alborida",
              "Mrs. Ariane Patricio",
              "Mr. Rolando Manzanilla",
              "Mrs. Chona Palacpac",
              "Mr. Marlon Mercado",
              "Mrs. Liezel Sulinap",
            ].map((sponsor, i) => (
              <p key={i} className="text-gray-700 text-sm md:text-base">{sponsor}</p>
            ))}
          </div>
        </div>

        {/* Best Man & Matron */}
        <div className="text-center space-y-1 grid grid-cols-2">

          <div>
            <h2 className="text-lg font-garamond font-semibold text-gray-600">
              Best Man
            </h2>
            <p className="text-gray-700 text-sm  md:text-base">Jerome Lloyd Dizon</p>
          </div>

          <div>
            <h2 className="text-lg font-garamond font-semibold text-gray-600">
              Matron of Honor
            </h2>
            <p className="text-gray-700 text-sm  md:text-base">Anne Gelyn Raymundo</p>
          </div>

        </div>

        <div className="grid grid-cols-2  gap-y-1 text-center py-2">
          <div className="text-center">
            <h2 className="text-lg font-garamond font-semibold text-gray-600 mb-2">
              Groomsmen
            </h2>
            <div className="space-y-1">
              {[
                "Julius Asher Austria",
                "Jon Christopher Matienzo",
                "Rey Benedict Magpantay",
                "Christian Panotes",
                "Marjean Samonte",
              ].map((groom, i) => (
                <p key={i} className="text-gray-700 text-sm md:text-base">{groom}</p>
              ))}
            </div>
          </div>

          {/* Bridesmaids */}
          <div className="text-center">
            <h2 className="text-lg font-garamond font-semibold text-gray-600 mb-2">
              Bridesmaids
            </h2>
            <div className="space-y-1">
              {[
                "Juliana Marie Pareja",
                "Nichols Joyce Bautista",
                "Ciara Mary Ann Calpo",
                "Sen Austria",
                "Jessuine Marie Austria",
              ].map((bride, i) => (
                <p key={i} className="text-gray-700 text-sm md:text-base">{bride}</p>
              ))}
            </div>
          </div>
        </div>


        {/* Secondary Sponsors */}
        <div>
          <h2 className="text-lg font-garamond font-semibold text-gray-600 mb-2 text-center">
            Secondary Sponsors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="font-semibold text-gray-600">Veil</h3>
              <p className="text-gray-700">Carl Anthony Lantican</p>
              <p className="text-gray-700">Muriel Laisa Dizon</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-600">Candle</h3>
              <p className="text-gray-700">Marjean Samonte</p>
              <p className="text-gray-700">Jessuine Marie Austria</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-600">Cord</h3>
              <p className="text-gray-700">Charles Alcachupas</p>
              <p className="text-gray-700">Marian Alcachupas</p>
            </div>
          </div>
        </div>

        {/* Bearers & Flower Aisle */}
        <div className="text-center space-y-3">
          {[
            { title: "Bible Bearer", name: "Noah Languban" },
            { title: "Coin Bearer", name: "Atlas Theodore Dizon" },
            { title: "Ring Bearer", name: "Xean Prim Palacpac" },
            { title: "Banner Bearer", name: "Jna Patricio" },
          ].map((b, i) => (
            <div key={i}>
              <h2 className="text-lg font-garamond font-semibold text-gray-600">{b.title}</h2>
              <p className="text-gray-700 whitespace-nowrap">{b.name}</p>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-garamond font-semibold text-gray-600">Flower Aisle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1">
              {[
                "Athena Scarlett Catindig",
                "Jezy Gabrene Dizon",
                "Brianna Victoria Catindig",
                "Princess Jewel Palacpac",
                "Charlie Benson Alcachupas",
                "Novien Palacpac",
              ].map((flower, i) => (
                <p key={i} className="text-gray-700 text-center whitespace-nowrap">
                  {flower}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
