import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "lib-toast-template-3",
  standalone: false,
  templateUrl: "./toast-template-3.component.html",
  styleUrl: "./toast-template-3.component.css",
})
export class ToastTemplate3Component implements OnChanges {
  @Input() showIcon: boolean = true;
  @Input() icon: any;
  @Input() closeToast: boolean = false;
  @Input() toastTitle: string = "Success";
  @Input() toastMessage: string = "";
  @Input() toastStyle: any;
  @Input() toastText: any;
  @Input() toastPosition: any;
  @Input() iconStyle: any;
  @Input() buttonHover: any;
  @Input() showButtons?: boolean = false;
  @Input() progressBarStyle: any;
  @Input() showProgressBar = true;
  @Input() progress: any;
  @Input() toastIndex: any;
  @Input() iconColor: any;
  @Input() acceptBtnLabel: any;
  @Input() cancelBtnLabel: any;
  @Output() toastAccept = new EventEmitter();

  @Output() fnCloseToast = new EventEmitter<{ index: any }>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["progress"]) {
      const currentProgress = changes["progress"].currentValue;
      if (currentProgress >= 100) {
        this.closeToast = true;
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
