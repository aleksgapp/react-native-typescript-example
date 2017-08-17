/**
 * Interface to represent a message
 */
export interface Message {
  /**
   * Unique id for the message
   */
  id: number;

  /**
   * Name of the sender
   */
  sender: string;

  /**
   * Title of the message
   */
  title: string;

  /**
   * Message body
   */
  body: string;

  /**
   * Sent date
   */
  sent: string;

  /**
   * Received date
   */
  received: string;
}

/**
 * Interface to represent a user
 */
export interface User {
  /**
   * User id
   */
  id: Number;

  /**
   * Full name (First name <space> Last name)
   */
  fullName: string;

  /**
   * Optional: Url for the avatar
   */
  avatar?: string;
}

/**
 * Interface to represent the state in the redux store
 */
export interface HomeState {
  /**
   * App user
   */
  user?: User;

  /**
   * List of messages
   */
  messages?: Message[];
}
