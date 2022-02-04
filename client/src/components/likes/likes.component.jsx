import React from "react";
import { useSelector } from "react-redux";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const Likes = ({likes}) => {
    const user = useSelector(state => state.auth.authData)

    if (likes.length > 0) {
        return (likes.find(id => id === user?.user?.googleId || id === user?.user?._id) ? (
            <>
                <ThumbUpAltIcon fontSize="small" />
			    &nbsp; {likes.length}
            </>
        ) : (
            <>
                <ThumbUpAltOutlinedIcon fontSize="small" />
                &nbsp; {likes.length}
            </>
        ))
    } else {
        return (
            <>
                <ThumbUpAltOutlinedIcon fontSize="small" />
                &nbsp; {likes.length}
            </>
        )
    }
};

export default Likes;
