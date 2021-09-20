import { createPluralGetter } from "./utils";

export const strings = {
    give: "Zadat",
    select: "Vybrat",
    power: "Výkon",
    requiredValue: "Údaj je povinný",
    model: "Model",
    manufacturer: "Značka",
    category: "Kategorie",
    date: "Datum",
    torque: "Kroutící moment",
    vin: "VIN",
    tankVolume: "Objem nádrže",
    cancelSelection: "Zrušit výběr",
    transmission: "Převodovka",
    emptyValueText: "–",
    monthPlural: createPluralGetter({ one: "měsíc", few: "měsíce", other: "měsíců" }),
    literPlural: createPluralGetter({ one: "litr", few: "litry", other: "litrů" }),
}
