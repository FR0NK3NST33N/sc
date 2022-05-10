export interface LogoProps {
  fill?: string;
  tabBarVariant?: boolean;
}

export const Logo = ({ fill = "white", tabBarVariant = false }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={tabBarVariant ? "40px" : "50px"}
      height={tabBarVariant ? "40px" : "50px"}
      viewBox="0 0 60 50"
      version="1.1"
    >
      <title>Contrast_Logo_RGB</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Home-V1"
          transform="translate(-69.000000, -47.000000)"
          fillRule="nonzero"
        >
          <g id="Contrast_Logo_RGB" transform="translate(69.000000, 47.830840)">
            <g id="Symbol">
              <path
                d="M17.0520191,24.1825873 C17.0520191,31.5253386 19.8757826,38.0441224 24.5191166,42.4364718 C23.7852818,42.5029873 23.0299874,42.5351766 22.2510928,42.5351766 C9.11286255,42.5351766 2.38901777e-14,34.9220589 2.38901777e-14,24.5044499 C2.38901777e-14,14.0868409 9.11286255,6.47157796 22.2510928,6.47157796 C22.7725039,6.47157796 23.2810377,6.48230681 23.7724072,6.5016193 C19.5560724,10.9175688 17.0520191,17.2110496 17.0520191,24.1825873 Z"
                id="Path"
                fill={tabBarVariant ? fill : "#004D45"}
              />
              <path
                d="M55.8791522,9.96485786 C56.4998812,13.9688264 53.4197747,17.2646938 48.1885159,17.2646938 C40.3266461,17.2646938 38.9310712,7.13890605 23.7724072,6.5016193 C27.6059533,2.46975747 32.8628968,2.98874959e-15 38.943915,2.98874959e-15 C39.063779,2.98874959e-15 39.1815024,2.98874959e-15 39.3013691,0.00214520846 C48.0472456,0.00214520846 55.1984884,5.59396617 55.8791522,9.96485786 Z"
                id="Path"
                fill={tabBarVariant ? fill : "#0E9E53"}
              />
              <path
                d="M51.3314824,31.945906 C53.3587639,32.3407225 55.9581761,33.7268777 55.9581761,37.9411271 C55.9581761,43.7925856 46.8537584,48.1591841 39.2843758,48.232138 C39.2843758,48.232138 39.2649476,48.232138 39.2476769,48.232138 C39.2347239,48.232138 39.2282459,48.232138 39.221768,48.232138 C39.2152901,48.232138 39.2131327,48.232138 39.2131327,48.232138 C33.4486557,48.2235544 28.3642597,46.0499114 24.5191194,42.4364718 C37.8594514,41.3056609 44.1075367,30.5318575 51.3314824,31.945906 Z"
                id="Path"
                fill={tabBarVariant ? fill : "#0A004F"}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
