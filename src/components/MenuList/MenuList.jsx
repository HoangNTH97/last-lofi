import React from 'react';
import PropTypes from 'prop-types';
import './MenuList.scss';
import MenuItem from './MenuItem/MenuItem';
import profileIcon from '../../assets/icon/profile.svg';
import settingIcon from '../../assets/icon/settings.svg';
import generalSettingIcon from '../../assets/icon/settings_h.svg';
import spotify2Icon from '../../assets/icon/spotify2.svg';
import playlistIcon from '../../assets/icon/playlist.svg';
import infoIcon from '../../assets/icon/info.svg';
import messageIcon from '../../assets/icon/message.svg';

MenuList.propTypes = {
    hide: PropTypes.bool.isRequired,
};

function MenuList({ hide }) {
    return (
        <div style={hide ? { display: 'none' } : { display: 'block' }} className={`menu-list`}>
            <MenuItem src={profileIcon} text="Login" />
            <MenuItem src={settingIcon} text="Pricing" />
            <MenuItem src={generalSettingIcon} text="General settings" />
            <MenuItem src={messageIcon} text="Contact us" />
            <MenuItem src={generalSettingIcon} text="How it works" />
            <MenuItem src={spotify2Icon} text="Playlist" />
            <MenuItem src={playlistIcon} text="Submit music" />
            <MenuItem src={infoIcon} text="About us" />
        </div>
    );
}

export default MenuList;
