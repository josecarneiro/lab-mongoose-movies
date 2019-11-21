const mongoose = require('mongoose');

const celeSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: true,
          
        },

        occupation: {
             type: String,
            required: true,
            maxlength: 140,
            
          },

          catchPhrase: {
            type: String,
            required: true,
            maxlength: 140,
        
          }
      
      },
  
   
  
);

const Celebrity = mongoose.model('Celebrity', celeSchema);

module.exports = Celebrity;