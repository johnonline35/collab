import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, Link, ListIcon, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Sidebar() {
  return (
    <List color='white' fontSize='1.2em' spacing={4}>
      <ListItem>
        <Link import {...NextLink} href='/partners'>
          <ListIcon as={CalendarIcon} color='white' /> Dashboard
        </Link>
      </ListItem>
      <ListItem>
        <Link import {...NextLink} href='/mastertodos'>
          <ListIcon as={EditIcon} color='white' />
          Master Task List
        </Link>
      </ListItem>
      <ListItem>
        <Link import {...NextLink} href='/account'>
          <ListIcon as={AtSignIcon} color='white' />
          Account
        </Link>
      </ListItem>
    </List>
  );
}
