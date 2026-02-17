"use client"

import React, { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Check } from "lucide-react"
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

  const handleBook = () => {
    if (date && selectedTime) {
      toast.success(`${title} successful for ${date.toDateString()} at ${selectedTime}`);
      setIsOpen(false);
      setSelectedTime(null);
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
            <>
              <ToggleGroup
                type="single"
                value={selectedTime || ""}
                onValueChange={(value) => setSelectedTime(value || null)}
                className="grid grid-cols-3 gap-2"
              >
                {timeSlots.map((time) => (
                  <ToggleGroupItem
                    key={time}
                    value={time}
                    aria-label={selectedTime === time ? `Selected time ${time}` : `Select time ${time}`}
                    variant="outline"
                    className={cn(
                      "h-9 w-full text-xs hover:bg-teal-50 hover:text-teal-900 transition-colors",
                      "data-[state=on]:bg-teal-600 data-[state=on]:text-white data-[state=on]:hover:bg-teal-700"
                    )}
                  >
                    {time}
                    {selectedTime === time && <Check className="ml-2 h-3 w-3" />}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
              <div className="text-center mt-3 h-5">
                <p aria-live="polite" className="text-sm font-medium text-teal-800">
                  {date && selectedTime ? `Selected: ${date.toDateString()} at ${selectedTime}` : ""}
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-end">
          <Button
            onClick={handleBook}
            disabled={!date || !selectedTime}
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
