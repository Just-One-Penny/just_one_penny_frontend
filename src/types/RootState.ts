import { ThemeState } from 'styles/theme/types';
import { AuthenticationState } from 'app/containers/Authentication/types';
import { CharityListState } from 'app/containers/CharityList/types';
import { AccountSettingsState } from 'app/containers/AccountSettings/types';
import { DonationModalState } from 'app/containers/DonationModal/types';
import { AuthenticationModalState } from 'app/containers/AuthenticationModal/types';

// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  theme?: ThemeState;
  authentication?: AuthenticationState;
  charityList?: CharityListState;
  accountSettings?: AccountSettingsState;
  donationModal?: DonationModalState;
  authenticationModal?: AuthenticationModalState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
