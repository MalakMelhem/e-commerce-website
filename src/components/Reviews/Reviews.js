import React from 'react';
import { useState } from 'react';
import { TextField, List, ListItem, ListItemText } from '@mui/material';
import {Button} from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import useStyles from './ReviewsStyle';
import { Box } from '@mui/material';

const Reviews = () => {
    const [comments, setComments] = useState([{id:1,userName:'Lisa Cooper',comment:'Great design for all product here!'},{id:2,userName:'Anne Cooper',comment:'Good product'}]);
    const [newComment, setNewComment] = useState('');
    let index=3;

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if(newComment!==''){
        const updatedComments = [...comments, {id:index++,userName:'Lisa Cooper',comment:newComment}];
        setComments(updatedComments);
        setNewComment('');
    }
    
  };
  const classes = useStyles();
  return (
    <Box>
      
      <List>
        {comments.map((comment, index) => (
          <ListItem key={comment.id}>
            <Stack direction="row" spacing={3}>
                <Avatar alt={comment.userName} src="/static/images/avatar/1.jpg" className={classes.userAvatar}/>
            </Stack>
            <ListItemText primary={comment.comment} />
          </ListItem>
        ))}
      </List>
      <Box className={classes.commentSection}>
        <TextField
            className={classes.commentTextField}
            label="Add a review"
            variant="outlined"
            value={newComment}
            onChange={handleCommentChange}
        />
        <Button className={classes.commentBtn} variant="contained" onClick={handleCommentSubmit}>
        Comment
        </Button>
      </Box> 
    </Box>
  );
}
export default Reviews;
