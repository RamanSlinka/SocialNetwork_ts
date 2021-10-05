import React from "react";
import {dialogPageType, sendMessageCreator} from "../../Redux/DialogsReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";


type mapStateToPropsType = {
    dialogsPage: dialogPageType
}

type mapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType =
    mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


