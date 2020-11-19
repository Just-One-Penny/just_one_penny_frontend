import { ThemeState } from 'styles/theme/types';
// import { AuthenticationState } from 'app/containers/Authentication/types';
import { CharityListState } from 'app/containers/CharityList/types';
import { AccountSettingsState } from 'app/containers/AccountSettings/types';
import { DonationModalState } from 'app/containers/DonationModal/types';
import { AuthenticationModalState } from 'app/containers/AuthenticationModal/types';

import { CharityDisplayState } from 'app/containers/CharityDisplay/types';
import { NewsFeedState } from 'app/containers/NewsFeed/types';
import { StripeSuccessState } from 'app/containers/StripeSuccess/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  charityDisplay: import('/Users/mattbicknese/JOP/just_one_penny_frontend/src/app/containers/CharityDisplay/types').CharityDisplayState;
  theme?: ThemeState;
  // authentication?: AuthenticationState;
  accountSettings?: AccountSettingsState;
  donationModal?: DonationModalState;
  charityList?: CharityListState;
  charityDisplayState?: CharityDisplayState;
  authenticationModal?: AuthenticationModalState;
  newsFeed?: NewsFeedState;
  stripeSuccess?: StripeSuccessState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
