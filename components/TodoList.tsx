"use client";
import React from "react";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Popover } from "./ui/popover";
import { PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";


export default function TodoList() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    // Calendar
    <div>
        <h1 className="text-xl mb-6">Todo List</h1>
      <Popover>
        <PopoverTrigger asChild>
            <Button className="w-full">
                <CalendarIcon />
                {date? format(date, "PPP"): <span>Pick a date</span>}
            </Button>
        </PopoverTrigger>
        <PopoverContent asChild>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>
      {/* // List */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantiu.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantiu.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantiu.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantiu.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantiu.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantiu.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantiu.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantiu.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantiu.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
