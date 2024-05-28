import { useContext } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";
import { ContextMain } from "../../../context/ContextAuth";
import { LogOut, Store, User } from "lucide-react";
function NavbarProfile() {
  const { detailUser, logout } = useContext(ContextMain);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='outline-none flex items-center ml-5'>
        <Avatar className='w-9 h-9'>
          <AvatarImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAQMOWxWKXJOflAVUu7fOazhgv9BYCp4jzw&s' />
          <AvatarFallback className='text-[0.5rem]'>No image</AvatarFallback>
        </Avatar>
        <div className='text-secondary-mainColor ml-2'>
          {detailUser?.detailUser?.username}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className='text-primary-mainColor'>
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='flex gap-2 items-center hover:bg-secondary-mainColor hover:text-background-main tracking-[0.05rem] rounded-md text-secondary-mainColor '>
          <User size={17} />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className='flex gap-2 items-center hover:bg-secondary-mainColor hover:text-background-main tracking-[0.05rem] rounded-md text-secondary-mainColor '>
          <Store size={17} />
          Billing
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <AlertDialog>
          <AlertDialogTrigger className='flex cursor-default select-none  px-2 py-1.5 text-sm outline-none transition-colors gap-2 items-center hover:bg-secondary-mainColor hover:text-background-main tracking-[0.02rem] w-full rounded-md text-secondary-mainColor'>
            <LogOut size={17} />
            Logout
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-background-main">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. You will have sign in again to access this website
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={logout} className="bg-[black] text-background-main hover:text-[black] hover:bg-background-main">Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavbarProfile;
