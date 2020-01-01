import React, { Component } from "react";
import { compose } from "redux";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  Button,
  Box
} from "@material-ui/core";
import { Field, reduxForm } from "redux-form";
import { SubmissionError } from "redux-form";
import renderTextField from "./../formHelper/TextField";
import styles from "./styles";

class CardAddPost extends Component {
  onPost = async data => {
    const { reset } = this.props;
    if (!data.title) {
      throw new SubmissionError({
        title: "The title is required."
      });
    }
    if (!data.content) {
      throw new SubmissionError({
        content: "The content is required."
      });
    }
    const post = await {
      title: data.title,
      content: data.content
    };
    await this.props.addPost(post);
    await reset();
  };

  render() {
    const { classes, handleSubmit, invalid } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Create Post
          </Typography>
          <CardContent className={classes.cardContent}>
            <form onSubmit={handleSubmit(this.onPost)}>
              <Field
                margin="normal"
                fullWidth
                id="title"
                label="Title"
                name="title"
                component={renderTextField}
              />
              <Field
                margin="normal"
                fullWidth
                id="content"
                label="What's on your mind ???"
                name="content"
                component={renderTextField}
              />
              <Box display="flex" justifyContent="flex-end">
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  color="primary"
                  className={classes.submit}
                  disabled={invalid}
                >
                  Post
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const withReduxForm = reduxForm({
  form: "post"
});

export default compose(
  withStyles(styles),
  withReduxForm
)(CardAddPost);
