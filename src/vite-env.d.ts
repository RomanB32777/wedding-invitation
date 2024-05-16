/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
	readonly VITE_SHEET_URL: string;
	readonly VITE_WEDDING_DATE: string;
	readonly VITE_LOCATION_LINK: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
