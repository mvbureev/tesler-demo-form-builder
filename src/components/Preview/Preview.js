import React from 'react';
import PropTypes from 'prop-types';
import { MuiForm5 as Form } from '@rjsf/material-ui';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '../Paper';

function Preview({
  widgets,
  uiSchema,
  jsonSchema,
}) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      mb={3}
    >
      <Grid item xs={10}>
        <Paper>
          <Form
            widgets={widgets}
            schema={jsonSchema}
            uiSchema={uiSchema}
          >
            <div>
              <Button
                type="submit"
                style={{ display: 'none' }}
              >
                Применить
              </Button>
            </div>
          </Form>
        </Paper>
      </Grid>
    </Grid>
  );
}

Preview.propTypes = {
  widgets: PropTypes.objectOf(Object),
  uiSchema: PropTypes.objectOf(Object),
  jsonSchema: PropTypes.objectOf(Object),
}

Preview.defaultProps = {
  widgets: null,
  uiSchema: null,
  jsonSchema: null,
}

export default Preview;
