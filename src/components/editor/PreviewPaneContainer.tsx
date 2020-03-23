import React from 'react';
import { useSelector } from 'react-redux';
import PreviewPane from './PreviewPane';
import { RootState} from 'store/modules'
import { statement } from '@babel/template';
import { withRouter } from 'react-router-dom';

const  PreviewPaneContainer = () =>  {

    const { title, markdown} = useSelector(
        ( state :RootState) => ({
            title: state.editor.posts,
            markdown: state.editor.markdown,
        }),
    );

    return (
        <PreviewPane title={title} markdown={markdown}/>
    );
}

export default withRouter(PreviewPaneContainer);