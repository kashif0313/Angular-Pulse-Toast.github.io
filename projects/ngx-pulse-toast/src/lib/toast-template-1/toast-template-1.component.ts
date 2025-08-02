import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "lib-toast-template-1",
  standalone: false,
  templateUrl: "./toast-template-1.component.html",
  styleUrl: "./toast-template-1.component.css",
})
export class ToastTemplate1Component {
  @Input() showIcon: boolean = true;
  @Input() icon: any;
  @Input() closeToast: boolean = false;
  @Input() toastTitle: string = "Success";
  @Input() toastMessage: string = "";
  @Input() toastIndex: any;
  @Input() toastStyle: any;
  @Input() toastText: any;
  @Input() toastPosition: any;
  @Input() iconStyle: any;
  @Input() iconColor: any;
  @Input() progressBarStyle: any;
  @Input() showProgressBar = true;
  @Input() progress: any = 50;
  @Input() buttonHover: any;
  @Input() showButtons?: boolean = false;
  @Input() acceptBtnLabel: any;
  @Input() cancelBtnLabel: any;

  @Output() fnCloseToast = new EventEmitter<{ index: any }>();
  @Output() toastAccept = new EventEmitter();
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["progress"]) {
      const currentProgress = changes["progress"].currentValue;
      if (currentProgress >= 100) {
        // this.closeToast = true;
      }
    }
  }

  closeBtn() {
    this.fnCloseToast.emit({ index: this.toastIndex });
    this.closeToast = true;
  }
  acceptBtn() {
    this.toastAccept.emit({ index: this.toastIndex });
    this.closeToast = true;
  }
}
