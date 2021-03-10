import Profile from "../Admins/src-admin/item/item-description/DescriptionItem";
import Tape from "../Admins/src-admin/item/item-description/tape";
import Accessories from "../Admins/src-admin/item/item-description/accessories";
import Light from "../Admins/src-admin/item/item-description/light";
import Constructions from "../Admins/src-admin/item/item-description/constructions";
import Led from "../Admins/src-admin/item/item-description/led";
import Consumables from "../Admins/src-admin/item/item-description/consumables";
import Tools from "../Admins/src-admin/item/item-description/tools";
import Additional from "../Admins/src-admin/item/item-description/additional";
import React from "react";

export const descriptionRender = (props,route) => {
    switch (route) {
        case 'profile': {
            return <Profile {...props} />
        }

        case 'tape': {
            return <Tape {...props} />
        }

        case 'accessories': {
            return <Accessories {...props} />
        }

        case 'light': {
            return <Light {...props} />
        }

        case 'constructions': {
            return <Constructions {...props} />
        }

        case 'led': {
            return <Led {...props} />
        }

        case 'consumables': {
            return <Consumables {...props} />
        }

        case 'tools': {
            return <Tools {...props} />
        }

        case 'additional': {
            return <Additional {...props} />
        }
    }
}