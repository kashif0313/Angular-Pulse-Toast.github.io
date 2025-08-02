# 🔥 NgxPulseToast – Angular Toast Notification Library

NgxPulseToast is a lightweight and flexible **Angular toast notification library** that helps you display success, error, warning, and information messages beautifully. It includes **3 customizable toast styles**, supports animations, progress bars, and user interaction for confirmation alerts.

---

## ✨ Features

- 🎨 **3 unique toast styles**:
  - **Style 1 (basic)** – Minimalistic and clean.
  - **Style 2 (modern)** – Vibrant design with background effects.
  - **Style 3 (elegant)** – Compact with clean buttons layout.
- ⏳ **Progress bar** support with configurable duration.
- 🔔 Supports different toast types: `success`, `error`, `warning`, `info`.
- ⚡ Works with Angular **v15+**.
- 🖱️ Fully reactive: Listen to user actions (Accept/Cancel).
- 🌗 Customizable button labels.
- ✅ **Buttons can be enabled or disabled in all styles** using the `withActions` option.
- 🎨 **Tailwind CSS supported** – Bootstrap will be supported in the future.

---

## 📦 Installation

Install the package via npm:

```bash
npm install ngx-pulse-toast
```

Import the module into your Angular app:

```ts
import { NgxPulseToastModule } from 'ngx-pulse-toast';

@NgModule({
  imports: [NgxPulseToastModule, ...],
})
export class AppModule {}
```

---

## 🚀 Basic Usage

Import it into html file first

```ts
<ngx-pulse-toast [position]="'bottom-center'" [showIcon]="true" [showProgressBar]="true"
 [design]="'basic'"></ngx-pulse-toast>
```

and then
Inject the service and show a toast:

```ts
constructor(private toast: ToastService) {}

showToast() {
  this.toast.show('Hello from toast!', 'success');
}
```

---

### ✅ With Accept/Cancel Buttons (Available in All Styles)

```ts
this.toast
  .show("Do you want to continue?", "success", {
    withActions: true,
    acceptButtonLabel: "Yes",
    cancelButtonLabel: "No",
  })
  .subscribe((result) => {
    if (result === "accept") {
      console.log("✅ User accepted the toast!");
    } else {
      console.log("❌ User canceled the toast.");
    }
  });
```

---

## 🎨 Toast Styles

### **Style 1 (basic)**

Minimalistic design with icon, title, message, optional buttons, and progress bar.

![Style 1 Preview](docs/style1.png)

---

### **Style 2 (modern)**

Visually enhanced toast with background elements, shadows, larger layout, optional buttons, and progress bar.

![Style 2 Preview](docs/style2.png)

---

### **Style 3 (elegant)**

Compact and modern layout with buttons and progress bar.

![Style 3 Preview](docs/style3.png)

---

## ⚙️ Configuration Options

The `show()` method uses a configuration object for optional parameters:

```ts
show(
  message: string,
  type: 'success' | 'error' | 'info' | 'warning',
  options?: {
    duration?: number;
    withActions?: boolean;
    acceptButtonLabel?: string;
    cancelButtonLabel?: string;
  }
)
```

| Option              | Type      | Default      | Description                                                                                               |
| ------------------- | --------- | ------------ | --------------------------------------------------------------------------------------------------------- |
| `message`           | `string`  | -            | Toast message text.                                                                                       |
| `type`              | `string`  | `info`       | Toast type: `success`, `error`, `warning`, `info`.                                                        |
| `duration`          | `number`  | `3000`       | Auto-close duration (ms).                                                                                 |
| `withActions`       | `boolean` | `false`      | Show Accept/Cancel buttons.                                                                               |
| `acceptButtonLabel` | `string`  | `Show Me`    | Label for the accept button.                                                                              |
| `cancelButtonLabel` | `string`  | `Cancel`     | Label for the cancel button.                                                                              |
| `position`          | `string`  | `top-center` | Position Locations : `top-center`, `bottom-center`, `top-left`, `bottom-left`,`top-right`, `bottom-right` |
| `showIcon`          | `boolean` | `true`       | Show / Hide toast Icon.                                                                                   |
| `showProgressBar`   | `boolean` | `true`       | Show / Hide toast progressbar.                                                                            |
| `design`            | `string`  | `basic`      | Toast design : `basic`, `modern` , `elegent`.                                                             |

---

## 🔧 Building from Source

Clone the repository and build the library:

```bash
ng build ngx-pulse-toast
```

The build output will be placed in the `dist/` directory.

---

## 🚀 Publishing to NPM (for maintainers)

```bash
cd dist/ngx-pulse-toast
npm publish
```

---

## 🧪 Running Unit Tests

```bash
ng test
```

---

## 🧩 Running End-to-End Tests

```bash
ng e2e
```

---

## 📚 Additional Resources

- Angular CLI Reference: [https://angular.dev/tools/cli](https://angular.dev/tools/cli)
- For contributions and issues, please open a PR or create a ticket.

---

## 🙌 Author

**NgxPulseToast** is developed and maintained by **[Kashif Imran](https://github.com/your-profile)**.  
Contributions and feedback are welcome!

---

## 📜 License

This project is licensed under the **MIT License** – free to use and modify for commercial and personal projects.
