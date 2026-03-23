import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { getErrorMessage } from '@/lib/frappe'
import _ from '@/lib/translate'
import { Link } from "react-router"
import { LandmarkIcon } from 'lucide-react'
import { useState } from 'react'


const StatementImport = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                        <Link to="/statement-importer">
                            <Button variant={'outline'} size='icon'>
                                <LandmarkIcon />
                            </Button>
                        </Link>
                    </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent>
                    {_("Import Bank Statement")}
                </TooltipContent>
            </Tooltip>
        </Dialog>
    )
}

export default StatementImport
