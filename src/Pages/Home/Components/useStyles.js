export default function useStyles() {
  return {
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '40px',
      color: 'white',
      marginBlockStart: '0px',
      textAlign: 'center',
    },
    formContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '800px',
    },
    description: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '24px',
      color: 'white',
      textAlign: 'center',
    },
    textInput: {
      width: '455px',
      height: '52px',
      background: '#1f2937',
      border: '1px solid #ffffff',
      borderRadius: '24px',
      fontWeight: '700',
      fontSize: '24px',
      color: '#818181',
    },
    checkBox: {
      color: 'white',
      '&.Mui-checked': {
        color: '#008000',
      },
      '& .MuiSvgIcon-root': { fontSize: 60 },
    },
    itemCard: {
      background: 'rgb(17, 24, 39)',
      borderRadius: '16px',
      width: '796px',
      height: '64px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0px 10px 0px 10px',
    },
    todoText: {
      fontWeight: '700',
      fontSize: '24px',
      width: '550px',
      color: 'rgb(255, 255, 255)',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    todoItem: {
      display: 'flex',
      alignItems: 'center',
    },
    todoListContainer: {
      marginTop: '28px',
      height: '61vh',
      overflowY: 'auto',
      borderRadius: '30px',
    },
  }
}
