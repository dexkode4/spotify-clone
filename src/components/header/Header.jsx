import React from "react";
import "./Header.styles.scss";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Header({ spotify }) {
	return (
		<div className="header">
			<div className="header__left">
				<SearchIcon />
                <input 
                    placeholder="Search for Artists, Songs, or Podcasts"
                    type="text"/>
                
			</div>
			<div className="header__right">
                <Avatar src="" alt="avatar"/>
                <h4>Dexkode</h4>
            </div>
		</div>
	);
}

export default Header;
