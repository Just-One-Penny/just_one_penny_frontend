import { ThemeState } from 'styles/theme/types';
import { CharityListState } from 'app/containers/CharityList/types';
import { AccountSettingsState } from 'app/containers/AccountSettings/types';
import { CharityDisplayState } from 'app/containers/CharityDisplay/types';
import { AuthenticationModalState } from 'app/containers/AuthenticationModal/types';
import { NewsFeedState } from 'app/containers/NewsFeed/types';
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
  charityDisplay?: CharityDisplayState;
  authenticationModal?: AuthenticationModalState;
  newsFeed?: NewsFeedState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
