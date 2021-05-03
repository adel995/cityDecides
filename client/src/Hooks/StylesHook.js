import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  mb1: {
    marginBottom: '1em',
  },
  mt1: {
    marginTop: '1em',
  },
  mr2: {
    marginRight: '2em',
  },
  indented: {
    marginLeft: '2em',
  },
  lineSpace1: {
    lineHeight: '2',
  },
  justifyRight: {
    alignSelf: 'flex-end',
  },
  fullWidth: {
    width: '95%',
  },
  btnFullWidth: {
    width: '100%',
  },
}));

export const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

export const usePaperStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));

export const useNotificationStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    margin: 'auto',
    '& > * + *': {
      marginTop: theme.spacing(0),
    },
  },
}));
export const useChartHeaderStyles = makeStyles((theme) => ({
  chartHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mr2: {
    marginRight: '2em',
  },
  mb2: {
    marginBottom: '2em',
  },
}));
