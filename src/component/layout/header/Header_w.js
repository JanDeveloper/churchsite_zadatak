import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import StickyHeader from "../../widget/StickyHeader/StickyHeader";
import uuid from "uuid";

const styles = theme => ({
    root: {
        ...theme.typography.button,
        color: theme.palette.common.white,
        padding: theme.spacing.unit,
        display: "inline-block"
    },
});

const navItem = [ "Home", "Ko smo mi?", "Vizija", "Šta verujemo", "Reč Pastora", "Aktivnosti", "Humanitarni rad", "Kontakt" ];

const newNavItem = [
    {
        "link": "google.com",
        "name": "Home"
    }, 
    {
        "link": "microsoft.com",
        "name": "Home"
    }
];

const Header_w = ( props ) => {
    return (
        <header className="header_w">
            <StickyHeader componentClassName="header-church">
                <div className="header-wrapper">
                    <span className="logo"/>
                    <ul className="menu-navigation">
                        {
                            newNavItem.map(item => {
                                return (
                                    <Typography
                                        key={uuid.v4()}
                                        className={props.classes.root}
                                        variant="subheading"
                                        gutterBottom
                                    >
                                        {item.name}
                                    </Typography>
                                );
                            })
                        }
                    </ul>
                </div>
            </StickyHeader>
        </header>
    );
};

Header_w.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header_w);
