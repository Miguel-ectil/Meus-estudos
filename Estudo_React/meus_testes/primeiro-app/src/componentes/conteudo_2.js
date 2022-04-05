import React from "react";
import { Button, Checkbox,  } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

export default function Conteudo2(){
    return(
        <section className='teste'>
            <div>
                <h2>Adicionando botões</h2>
                <Button type="submit" variant="contained" color="primary">
                    Miguel
                </Button>
                <Checkbox defaultChecked color="primary" />
                <Checkbox defaultChecked color="secondary" />
                <IconButton color="inherit">
                    <Badge badgeContent={6} color="secondary">
                    <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={8} color="secondary">
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                <AccountCircle />
                <MenuIcon />
            </div>
        </section>
    )
}



