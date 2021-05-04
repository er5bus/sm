import Link from "./../items/Link"
import NestedLinks from "./../items/NestedLinks"
import DownloadLink from "./../items/DownloadLink"
import Seperator from "./../items/Seperator"

export const LINK = "link"
export const DOWNLOAD_LINK = "download_link"
export const NESTED_LINKS = "nested_links"
export const SEPARATOR = "separator"

export const DEFAULT_MENU_COMPONENT = Link
export const MENU_COMPONENTS = {
  [LINK]: Link,
  [DOWNLOAD_LINK]: DownloadLink,
  [NESTED_LINKS]: NestedLinks,
  [SEPARATOR]: Seperator
}

