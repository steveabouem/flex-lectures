import React, { useState } from 'react';
import { accountPurpose, businessAccount, personnalAccount } from '../types';

const NewAccountForm = (): JSX.Element => {
  const [busActValues, setBusActValues] = useState<businessAccount | undefined>();
  const [personalActValues, setPersonalActValues] = useState<personnalAccount | undefined>();
  const [accountType, setAccountType] = useState<string>(accountPurpose.chq); //switch between types of form (as an alternative to have two different components)

  const updatePersonalActValues = (name: keyof personnalAccount/*ensures I only have valid kjeys*/, value: string | number) => { // a generic type would be helpful here
   // update the personal account state property values
    
  };

  const updateBusinessActValues = (name: keyof businessAccount/*ensures I only have valid kjeys*/, value: string | boolean | number) => { // a generic type would be helpful here
   // update the business account state property values
  };

  const switchAccountType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountType(e.target.value);
  }

  return (
    <div>
      <div>
        <label>Type</label><input type='radio' onChange={switchAccountType} />
        {/* return a different set of inputs depending on the type of account */}
        {accountType === accountPurpose.chq ? (
          <div>
            <div>
              <label>Name</label>
              <input value={personalActValues?.name || ''} onChange={(e) => updatePersonalActValues('name', e.target.value)}/>
               <label>Initial Balance</label>
              <input value={personalActValues?.name || ''} />
              
            </div>
          </div>
        ) : (
          <div>
            <div>
              {/* business account fields */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewAccountForm;