import { FormControl } from "@angular/forms";

export interface CreateTaskForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  status: FormControl<string | null>;
  priority: FormControl<number>;
  dateCreated: FormControl<any>;
}
