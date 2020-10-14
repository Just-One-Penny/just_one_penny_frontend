import { ThemeState } from 'styles/theme/types';
import { AuthenticationState } from 'app/containers/Authentication/types';
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
  authenticationModal?: AuthenticationModalState;
  newsFeed?: NewsFeedState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
