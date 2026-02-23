"use client"

import React, { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface BookingModalProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function BookingModal({
  children,
  title = "Book a Court",
  description = "Select a date and time to reserve a court."
}: BookingModalProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ]

  const handleBook = async () => {
    if (date && selectedTime) {
      setIsLoading(true)
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success(`${title} successful for ${date.toDateString()} at ${selectedTime}`);
      setIsOpen(false);
      setSelectedTime(null);
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          {date && (
            <ToggleGroup
              type="single"
              value={selectedTime || ""}
              onValueChange={(value) => {
                if (value) setSelectedTime(value)
              }}
              className="grid grid-cols-3 gap-2"
            >
              {timeSlots.map((time) => (
                <ToggleGroupItem
                  key={time}
                  value={time}
                  variant="outline"
                  aria-label={`Select ${time}`}
                  className={cn(
                    "text-xs w-full",
                    selectedTime === time && "bg-teal-600 hover:bg-teal-700 text-white hover:text-white data-[state=on]:bg-teal-600 data-[state=on]:text-white"
                  )}
                >
                  {time}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          )}
        </div>
        <div className="flex justify-end">
          <Button
            onClick={handleBook}
            disabled={!date || !selectedTime || isLoading}
            className="bg-teal-600 hover:bg-teal-700 text-white min-w-[100px]"
          >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Confirm"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
