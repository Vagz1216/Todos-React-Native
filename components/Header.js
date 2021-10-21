import React from "react";
import {
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors
} from "./../styles/appStyles.js";

// icons
import {Entypo} from '@expo/vector-icons';

const Header = ({handleClearTodos}) => {
     return (
         <HeaderView>
             <HeaderTitle> Todos </HeaderTitle>
             <HeaderButton 
                onPress ={handleClearTodos}
                > 
                 <Entypo name="trash" size={25} color={colors.tertiary} />
             </HeaderButton>
         </HeaderView>

     );
 }


export default Header;
