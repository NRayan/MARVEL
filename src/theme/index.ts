export type ThemeProps = {
    colors: {
        background: string,
        primary: string,
        text: string
    },
    fonts: {
        400: string,
        500: string,
        600: string,
        700: string,
    },
    paddings: {
        horizontal: string,
        vertical: string,
    }
}

export const theme: ThemeProps =
{
	colors: {
		background: "#181C2D",
		primary: "#F21534",
		text: "#FFF"
	},
	fonts: {
		"400": "Inter_400Regular",
		"500": "Inter_500Medium",
		"600": "Inter_700Bold",
		"700": "Inter_600SemiBold",
	},
	paddings: {
		horizontal: "8%",
		vertical: "5%"
	}
};