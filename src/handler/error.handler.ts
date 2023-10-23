import { app } from ".."

// Error Handler
app.onError(({code, error, set}) => {  
    if (code === 'NOT_FOUND') {
      set.status = 400
  
      return 'Not found'
    }
})