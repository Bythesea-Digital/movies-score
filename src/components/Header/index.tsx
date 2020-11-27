import React, { useMemo} from 'react';
import {BytheseaLogo, HeaderButton, HeaderMenu, SocialIconsContainer} from "./styles";
import Bythesea from '../../assets/images/bythesea.png'
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as LightMode } from '../../assets/icons/sun.svg';
import { ReactComponent as DarkMode } from '../../assets/icons/moon.svg';
import useAudio from "../../helpers/hooks/setSound";


type Props = {
    setTheme: () => void;
    isDarkMode:boolean;
}

function Header({ setTheme, isDarkMode}: Props): JSX.Element {
    const [toggleSound] = useAudio({soundUrl: require('../../assets/sounds/switch.mp3')});

    const toggleDarkMode = () => {
        toggleSound()
        setTheme()
    }

    const renderSwitchMode = useMemo(() => isDarkMode ? <DarkMode fill="white" width={32} height={32} /> : <LightMode fill="white" width={32} height={32} />, [isDarkMode])

    return (
        <HeaderMenu>
            <BytheseaLogo href="https://bythesea.digital"  rel="noopener noreferrer" target="_blank">
                <img src={Bythesea} alt="Bythesea Logo"/>
            </BytheseaLogo>
            <SocialIconsContainer>
                <HeaderButton onClick={toggleDarkMode}>
                    {renderSwitchMode}
                </HeaderButton>
                    <a href="https://github.com/Bythesea-Digital/movies-score"  rel="noopener noreferrer" target="_blank">
                        <GithubIcon fill="white" width={32} height={32} />
                    </a>
            </SocialIconsContainer>
        </HeaderMenu>
    )
}

export default React.memo(Header)