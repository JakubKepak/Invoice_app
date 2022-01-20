import { FunctionComponent } from "react";
import { Grid, Typography, Card } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { Icon, RouterLink } from "../../../../components";
import { useStyles } from "./utils";
import { actions as allActions } from "../../../../store";

export type ListItemProps = {
    id: string,
    categoryId: string,
    name: string,
    destination: string,
};

export const ExpenseItem: FunctionComponent<ListItemProps> = ({ categoryId, id, name, destination }) => {
    const classes = useStyles({ name, destination });
    const dispatch = useDispatch();
    const actions = allActions.expense;
    const handleClick = () => {
        dispatch(actions.setExpenseType(id));
        dispatch(actions.setExpenseCategory(categoryId));
    };

    return (
        <Card onClick={handleClick} className={classes.root} variant="outlined">
            <RouterLink to={destination}>
                <Grid container={true} alignItems="center" className={classes.content}>
                    <Typography component="div" variant="subtitle1" className={classes.name}>
                        {name}
                    </Typography>
                    <Icon name="chevron-right" className={classes.chevron} variant="disabled" size="micro" />
                </Grid>
            </RouterLink>
        </Card>
    );
};
