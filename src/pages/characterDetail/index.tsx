import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTheme } from "styled-components/native";
import { LinkButton, ThumbnailGradient } from "../../components";
import { CharacterProps } from "../../types";
import { CloseButton, Container, Description, Links, LinksContainer, SubContainer, Thumbnail, Title } from "./styles";

export function CharacterDetail({ route: { params } }) {

	const theme = useTheme();
	const navigation = useNavigation();
	const character: CharacterProps = params;

	function handleCloseButtonPress() {
		navigation.goBack();
	}

	return (
		<>
			<StatusBar translucent style="light" backgroundColor="rgba(0,0,0,.2)" />

			<Container>
				<SubContainer>
					<Thumbnail source={{ uri: character.thumbnail }} />
					<ThumbnailGradient/>
				</SubContainer>

				<SubContainer>
					<Title>{character.name}</Title>
					<Description>{character.description}</Description>

					<Links>Links</Links>
					<LinksContainer>
						{
							character.urls.detail &&
							<LinkButton title="Details" link={character.urls.detail} />
						}
						{
							character.urls.comics &&
							<LinkButton title="Comics" link={character.urls.comics} />
						}
						{
							character.urls.wiki &&
							<LinkButton title="Wiki" link={character.urls.wiki} />
						}
					</LinksContainer>
				</SubContainer>
			</Container>

			<CloseButton onPress={handleCloseButtonPress}>
				<AntDesign name="close" size={26} color={theme.colors.text} />
			</CloseButton>
		</>
	);
}