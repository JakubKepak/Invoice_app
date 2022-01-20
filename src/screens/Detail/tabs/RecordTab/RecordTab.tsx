import { FunctionComponent } from "react";
import { Fab, List } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

import { Delimiter, Icon, PageHeader, RouterLink } from "../../../../components";
import { recordTypeToIconId, useRootSelector } from "../../../../utils";
import { getSelectedDeviceRecordList } from "../../../../store";
import { Record } from "../../../../types";
import { RecordLine } from "../../components";
import { useStyles } from "./utils";

export const RecordTab: FunctionComponent = () => {
    const classes = useStyles();
    const recordList = useRootSelector<Record[]>(getSelectedDeviceRecordList);

    return (
        <List className={classes.root}>
            {recordList.map((record) => (
                <RecordLine
                    key={record.id}
                    icon={<Icon name={recordTypeToIconId(record.type)} />}
                    title={record.title}
                    subtitle={record.subtitle}
                    rightText={record.rightText}
                    rightDescription={record.rightDescription}
                    rightDescriptionVariant={record.rightDescriptionVariant}
                />
            ))}
            <PageHeader>
                Další záznamy jsou pouze ukázkové
            </PageHeader>
            <Delimiter />
            <RecordLine
                icon={<Icon name="tachometer" />}
                title="Stav tachometru"
                subtitle="10. 6. 2021 • 251 546 km"
                rightText="436 000 km"
                rightDescription="8. 12. 2020"
            />
            <RecordLine
                icon={<Icon name="refueling" />}
                title="Tankování"
                subtitle="8. 6. 2021 • 250 032 km"
                rightText="43,3 l"
                rightDescription="1 637 Kč"
                rightDescriptionVariant="warning"
            />
            <RecordLine
                icon={<Icon name="expenses" />}
                title="Výdaj"
                subtitle="5. 5. 2021 • 240 125km"
                rightText="Dálniční známka"
                rightDescription="1 500 Kč"
                rightDescriptionVariant="warning"
            />
            <RecordLine
                icon={<Icon name="oil" />}
                title="Údržba"
                subtitle="3. 5. 2021 • 200 862 km"
                rightText="Servis 1 rok, 120 000 km"
                rightDescription="8 500 Kč"
                rightDescriptionVariant="warning"
            />
            <RecordLine
                icon={<Icon name="fault" />}
                title="Závada"
                subtitle="1. 4. 2021 • 250 000 km"
                rightText="Úroveň 1"
                rightDescription="Řešení: Vyměnit"
            />
            <RouterLink to="/pridat" className={classes.fabContainer}>
                <Fab color="secondary" className={classes.fab} aria-label="Přidat">
                    <AddIcon fontSize="large" />
                </Fab>
            </RouterLink>
        </List>
    );
};
