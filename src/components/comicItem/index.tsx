import React from "react";
import { ComicsProps } from "../../types";
import { Container, Content, Thumbnail, Title } from "./styles";

type Props = {
	comic: ComicsProps
}

export function ComicItem({ comic }: Props) {

	// const theme = useTheme();
	// const navigation = useNavigation();

	return (
		<Container>
			<Thumbnail source={{ uri: comic.thumbnail }} />
			<Content>
				<Title>{comic.title}</Title>
			</Content>
		</Container>
	);
}