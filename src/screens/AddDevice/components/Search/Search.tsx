import { ReactElement, useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@material-ui/core";
import { ArrowBack, Search as SearchIcon } from "@material-ui/icons";

import { TextLine, TextField } from "../../../../components";
import { toAscii, useNavigate } from "../../../../utils";
import { useStyles } from "./utils";
import { SearchProps } from "./SearchProps";
import { strings } from "../../../../strings";

export function Search<T extends { name: string }>({
    list,
    onSelect,
    title,
    isSearchActive,
    orderType = "asc",
}: SearchProps<T>): ReactElement {
    const classes = useStyles({ list, onSelect, title, isSearchActive });
    const [filter, setFilter] = useState("");
    const [, goBack] = useNavigate();

    const getOrderTypeMultiplier = (): number => {
        switch (orderType) {
            case "asc":
                return 1;
            case "desc":
                return -1;
            default:
                return 0;
        }
    }

    const filteredOrderedList = list
        .filter((item) => toAscii(item.name.toLowerCase()).includes(toAscii(filter.toLowerCase())))
        .sort((a, b) => getOrderTypeMultiplier() * a.name.localeCompare(b.name, undefined, { ignorePunctuation: true }));

    return (
        <Box className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton onClick={() => goBack()} aria-label="Zpět" className={classes.button} >
                        <ArrowBack fontSize="medium" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                </Toolbar>
                {isSearchActive ? (
                    <Toolbar className={classes.subtoolbar}>
                        <TextField
                            value={filter}
                            isFullWidth={true}
                            onChange={(value) => setFilter(value)}
                            startIcon={<SearchIcon />}
                        />
                    </Toolbar>
                ) : null}
            </AppBar>
            <Box className={classes.list}>
                {filteredOrderedList.length !== 0 ? (
                    <>
                        <Box onClick={() => onSelect(undefined)}>
                            <TextLine title={strings.cancelSelection} visualVariant="disabled" />
                        </Box>
                        {filteredOrderedList.map((item) => (
                            <Box key={item.name} onClick={() => onSelect(item)}>
                                <TextLine title={item.name} />
                            </Box>
                        ))}
                    </>
                ) : (
                    <Typography variant="h6" align="center" className={classes.empty}>
                        Seznam je prázdný
                    </Typography>
                )}
            </Box>
        </Box>
    );
};
