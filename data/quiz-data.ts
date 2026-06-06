export const quizData = {
  questions: [
    {
      number: 1,
      question: "What is an operating system?",
      options: [
        { label: "i", text: "Interface between the hardware and application programs" },
        { label: "ii", text: "Collection of programs that manages hardware resources" },
        { label: "iii", text: "System service provider to the application programs" },
        { label: "iv", text: "All of the mentioned" },
      ],
      correctAnswer: "iv",
      reason:
        "An operating system provides an interface between hardware and applications, manages hardware resources, and offers system services – hence all the mentioned options are correct.",
    },
    {
      number: 2,
      question: "What is the main function of the command interpreter?",
      options: [
        { label: "i", text: "To provide the interface between the API and application program" },
        { label: "ii", text: "To handle the files in the operating system" },
        { label: "iii", text: "To get and execute the next user-specified command" },
        { label: "iv", text: "None of the mentioned" },
      ],
      correctAnswer: "iii",
      reason:
        "The command interpreter (shell) reads user commands and executes them, making option iii the correct answer.",
    },
    {
      number: 3,
      question: "In operating systems, which of the following is/are CPU scheduling algorithms?",
      options: [
        { label: "I", text: "Priority" },
        { label: "II", text: "Round Robin" },
        { label: "III", text: "Shortest Job First" },
        { label: "IV", text: "All of the mentioned" },
      ],
      correctAnswer: "IV",
      reason:
        "All the listed algorithms – Priority, Round Robin, and Shortest Job First – are used for CPU scheduling.",
    },
    {
      number: 4,
      question: "To access the services of the operating system, the interface is provided by the _____",
      options: [
        { label: "I", text: "Library" },
        { label: "II", text: "System Calls" },
        { label: "III", text: "Assembly instructions" },
        { label: "IV", text: "API" },
      ],
      correctAnswer: "II",
      reason:
        "User-level programs generally access OS services via library routines that wrap system calls, making the library the interface.",
    },
    {
      number: 5,
      question: "CPU scheduling is the basis of _____",
      options: [
        { label: "I", text: "Multiprogramming operating systems" },
        { label: "II", text: "Time-sharing operating systems" },
        { label: "III", text: "Multiprocessor systems" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "I",
      reason: "Multiprogramming systems depend on CPU scheduling to manage multiple processes in memory effectively.",
    },
    {
      number: 6,
      question: "Which one of the following is not true?",
      options: [
        { label: "I", text: "Kernel remains in the memory during the entire computer session" },
        { label: "II", text: "Kernel is made of various modules which cannot be loaded in a running operating system" },
        { label: "III", text: "Kernel is the first part of the operating system to load into memory during booting" },
        { label: "IV", text: "Kernel is the program that constitutes the central core of the operating system" },
      ],
      correctAnswer: "II",
      reason:
        "Modern OS kernels are often modular and support dynamic loading/unloading of modules; statement II is incorrect.",
    },
    {
      number: 7,
      question: "Which one of the following errors will be handled by the operating system?",
      options: [
        { label: "I", text: "Lack of paper in printer" },
        { label: "II", text: "Connection failure in the network" },
        { label: "III", text: "Power failure" },
        { label: "IV", text: "All of the mentioned" },
      ],
      correctAnswer: "IV",
      reason:
        "Operating systems include mechanisms to handle hardware-related errors, which can include all the listed error types.",
    },
    {
      number: 8,
      question: "Where is the operating system placed in the memory?",
      options: [
        { label: "I", text: "Either low or high memory (depending on the location of the interrupt vector)" },
        { label: "II", text: "In the low memory" },
        { label: "III", text: "In the high memory" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "I",
      reason:
        "OS placement depends on system architecture; it can reside in low or high memory based on the location of interrupt vectors.",
    },
    {
      number: 9,
      question: "If a process fails, most operating systems write the error information to a _____",
      options: [
        { label: "I", text: "New file" },
        { label: "II", text: "Another running process" },
        { label: "III", text: "Log file" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "III",
      reason: "Error logs are maintained by the OS to record error information for debugging and auditing purposes.",
    },
    {
      number: 10,
      question: "Which one of the following is not a real time operating system?",
      options: [
        { label: "I", text: "RTLinux" },
        { label: "II", text: "PalmOS" },
        { label: "III", text: "QNX" },
        { label: "IV", text: "Vx Works" },
      ],
      correctAnswer: "II",
      reason:
        "PalmOS is designed for consumer handheld devices and is not tailored for real-time applications, unlike RTLinux, QNX, and Vx Works which are real-time operating systems.",
    },
    {
      number: 11,
      question: "What does OS X have?",
      options: [
        { label: "I", text: "Monolithic kernel with modules" },
        { label: "II", text: "Palm OS" },
        { label: "III", text: "Monolithic kernel" },
      ],
      correctAnswer: "I",
      reason:
        "OS X employs a hybrid kernel design that incorporates characteristics of a monolithic kernel along with modular components.",
    },
    {
      number: 12,
      question: "In an operating system, each process has its own _____",
      options: [
        { label: "I", text: "Open files" },
        { label: "II", text: "Pending alarms, signals, and signal handlers" },
        { label: "III", text: "Address space and global variables" },
        { label: "IV", text: "All of the mentioned" },
      ],
      correctAnswer: "IV",
      reason:
        "A process maintains its own set of open files, signal handlers, and address space; thus, all the mentioned elements are specific to a process.",
    },
    {
      number: 13,
      question:
        "In a timeshare operating system, when the time slot assigned to a process is completed, the process switches from the current state to which state?",
      options: [
        { label: "I", text: "Suspended state" },
        { label: "II", text: "Terminated state" },
        { label: "III", text: "Running state" },
        { label: "IV", text: "Ready state" },
      ],
      correctAnswer: "IV",
      reason: "After its time slice expires, the process returns to the ready state, waiting to be scheduled again.",
    },
    {
      number: 14,
      question:
        "Cascading termination refers to the termination of all child processes if the parent process terminates _____",
      options: [
        { label: "i", text: "Normally or abnormally" },
        { label: "ii", text: "Normally" },
        { label: "iii", text: "Abnormally" },
        { label: "iv", text: "None of the mentioned" },
      ],
      correctAnswer: "i",
      reason:
        "Cascading termination implies that regardless of whether the parent terminates normally or abnormally, its child processes are also terminated.",
    },
    {
      number: 15,
      question:
        "When a process is in a 'Blocked' state waiting for some I/O service, when the service is completed, it goes to the _____ state.",
      options: [
        { label: "I", text: "Terminated state" },
        { label: "II", text: "Suspended state" },
        { label: "III", text: "Running state" },
        { label: "IV", text: "Ready state" },
      ],
      correctAnswer: "IV",
      reason: "Once I/O is complete, the process becomes ready for CPU allocation, hence it enters the ready state.",
    },
    {
      number: 16,
      question: "Transient operating system code is a code that _____",
      options: [
        { label: "I", text: "Stays in the memory always" },
        { label: "II", text: "Never enters the memory space" },
        { label: "III", text: "Comes and goes as needed" },
        { label: "IV", text: "Is not easily accessible" },
      ],
      correctAnswer: "III",
      reason:
        "Transient code is loaded only when needed and removed afterward, so its presence in memory is temporary.",
    },
    {
      number: 17,
      question:
        "The portion of the process scheduler in an operating system that dispatches processes is concerned with _____",
      options: [
        { label: "I", text: "Assigning ready processes to waiting queue" },
        { label: "II", text: "Assigning running processes to blocked queue" },
        { label: "III", text: "Assigning ready processes to CPU" },
        { label: "IV", text: "All of the mentioned" },
      ],
      correctAnswer: "III",
      reason: "Dispatching is the act of selecting a process from the ready queue and assigning the CPU to it.",
    },
    {
      number: 18,
      question: "The FCFS algorithm is particularly troublesome for _____",
      options: [
        { label: "I", text: "Operating systems" },
        { label: "II", text: "Time sharing systems" },
        { label: "III", text: "Multiprocessor systems" },
        { label: "IV", text: "Multiprogramming systems" },
      ],
      correctAnswer: "II",
      reason:
        "FCFS scheduling can lead to long wait times and poor response, which is especially problematic in time-sharing environments.",
    },
    {
      number: 19,
      question: "For an effective operating system, when should deadlock be checked?",
      options: [
        { label: "I", text: "Every time a resource request is made at fixed time intervals" },
        { label: "II", text: "At fixed time intervals" },
        { label: "III", text: "Every time a resource request is made" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "II",
      reason:
        "Periodic checks (at fixed intervals) allow the OS to manage resources without incurring the overhead of checking with every request.",
    },
    {
      number: 20,
      question:
        "A deadlock avoidance algorithm dynamically examines the ______ to ensure that a circular wait condition can never exist.",
      options: [
        { label: "I", text: "Operating system" },
        { label: "II", text: "Resources" },
        { label: "III", text: "System storage state" },
        { label: "IV", text: "Resource allocation state" },
      ],
      correctAnswer: "IV",
      reason:
        "Deadlock avoidance algorithms analyze the current resource allocation state to determine if granting a request leads to an unsafe condition.",
    },
    {
      number: 21,
      question: "Swapping operations only ______ into operating system buffers.",
      options: [
        { label: "I", text: "Must never" },
        { label: "II", text: "Maybe" },
        { label: "III", text: "Can" },
        { label: "IV", text: "Must" },
      ],
      correctAnswer: "I",
      reason:
        "Swapping should not involve operating system buffers directly as it deals with memory management at a system level.",
    },
    {
      number: 22,
      question: "The main memory accommodates _____",
      options: [
        { label: "I", text: "CPU" },
        { label: "II", text: "User processes" },
        { label: "III", text: "Operating system" },
        { label: "IV", text: "All of the mentioned" },
      ],
      correctAnswer: "IV",
      reason:
        "Main memory holds the operating system, user processes, and other essential data required for execution.",
    },
    {
      number: 23,
      question: "The operating system is responsible for _____",
      options: [
        { label: "I", text: "Bad-block recovery" },
        { label: "II", text: "Disk initialization" },
        { label: "III", text: "User processes" },
        { label: "IV", text: "Booting from disk" },
        { label: "V", text: "All of the mentioned" },
      ],
      correctAnswer: "V",
      reason:
        "The operating system is involved in all these tasks—from managing disk errors to initiating boot procedures and handling user processes.",
    },
    {
      number: 24,
      question:
        "The operating system and other processes are protected from being modified by an already running process because _____",
      options: [
        {
          label: "I",
          text: "Every address generated by the CPU is checked against the relocation and limit registers",
        },
        { label: "II", text: "They have a protection algorithm" },
        { label: "III", text: "They are in different memory spaces" },
        { label: "IV", text: "They are in different logical addresses" },
      ],
      correctAnswer: "I",
      reason:
        "Hardware-level protection mechanisms (using relocation and limit registers) ensure that processes cannot modify memory outside their allocated space.",
    },
    {
      number: 25,
      question: "Using transient code execution, the size of the operating system during program execution _____",
      options: [
        { label: "I", text: "Maintains" },
        { label: "II", text: "Changes" },
        { label: "III", text: "Increases" },
        { label: "IV", text: "Decreases" },
      ],
      correctAnswer: "II",
      reason:
        "Since transient code is loaded only when needed, the memory footprint of the OS changes dynamically during execution.",
    },
    {
      number: 26,
      question:
        "The operating system maintains a table that keeps track of how many frames have been allocated, exist, and how many are available. This is called the _____ table.",
      options: [
        { label: "I", text: "Memory table" },
        { label: "II", text: "Mapping table" },
        { label: "III", text: "Page table" },
        { label: "IV", text: "Frame table" },
      ],
      correctAnswer: "IV",
      reason: "The frame table tracks the allocation of physical memory frames.",
    },
    {
      number: 27,
      question:
        "To obtain better memory utilization, dynamic loading is used. With dynamic loading, a routine is not loaded until it is called. For implementing dynamic loading, _____ is essential.",
      options: [
        { label: "I", text: "Special support from the operating system" },
        { label: "II", text: "Special support from hardware is required" },
        { label: "III", text: "User programs can implement dynamic loading without any special support" },
        { label: "IV", text: "Special support from both hardware and operating system is essential" },
      ],
      correctAnswer: "I",
      reason: "The OS must provide mechanisms to load routines on demand to support dynamic loading.",
    },
    {
      number: 28,
      question:
        "The ______ presents a uniform device-access interface to the I/O subsystem, much as system calls provide a standard interface between the application and the operating system.",
      options: [
        { label: "I", text: "Device drivers" },
        { label: "II", text: "I/O systems" },
        { label: "III", text: "Devices" },
        { label: "IV", text: "Buses" },
      ],
      correctAnswer: "I",
      reason: "Device drivers abstract the hardware details and provide a consistent interface for I/O operations.",
    },
    {
      number: 29,
      question: "In a real time operating system, a task must be serviced by its deadline period.",
      options: [
        { label: "I", text: "Process scheduling can be done only once" },
        { label: "II", text: "All processes have the same priority" },
        { label: "III", text: "Kernel is not required" },
        { label: "IV", text: "A task must be serviced by its deadline period" },
      ],
      correctAnswer: "IV",
      reason: "A hallmark of real-time systems is the guarantee that tasks meet their deadline periods.",
    },
    {
      number: 30,
      question: "A hard real time operating system has _____ jitter than a soft real time operating system.",
      options: [
        { label: "I", text: "Equal" },
        { label: "II", text: "More" },
        { label: "III", text: "Less" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "III",
      reason: "Hard real-time systems must minimize jitter to guarantee that deadlines are met consistently.",
    },
    {
      number: 31,
      question: "For real time operating systems, interrupt latency should be _____",
      options: [
        { label: "I", text: "Zero" },
        { label: "II", text: "Minimal" },
        { label: "III", text: "Maximum" },
        { label: "IV", text: "Dependent on the scheduling" },
      ],
      correctAnswer: "II",
      reason: "Minimal interrupt latency is crucial in real-time systems to ensure prompt processing of interrupts.",
    },
    {
      number: 32,
      question: "Which one of the following is a real time operating system?",
      options: [
        { label: "I", text: "Windows CE" },
        { label: "II", text: "RTLinux" },
        { label: "III", text: "VxWorks" },
        { label: "IV", text: "All of the mentioned" },
      ],
      correctAnswer: "IV",
      reason: "All listed options are known to be used in real-time applications.",
    },
    {
      number: 33,
      question: "The priority of a process will _____ if the scheduler assigns it a static priority.",
      options: [
        { label: "I", text: "Depends on the operating system" },
        { label: "II", text: "Change" },
        { label: "III", text: "Remain unchanged" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "III",
      reason: "A static priority is fixed by definition and does not change during process execution.",
    },
    {
      number: 34,
      question: "What are the characteristics of Host based IDS?",
      options: [
        { label: "I", text: "Logs are analysed to detect trails of intrusion" },
        { label: "II", text: "The host operating system logs in the audit information" },
        { label: "III", text: "Logs include logins, file opens, and program executions" },
        { label: "IV", text: "All of the mentioned" },
      ],
      correctAnswer: "IV",
      reason: "Host-based IDS analyze various logs (intrusion trails, audit logs, file accesses) to detect intrusions.",
    },
    {
      number: 35,
      question: "What are the characteristics of stack based IDS?",
      options: [
        { label: "I", text: "It is programmed to interpret a certain series of packets" },
        { label: "II", text: "It models the normal usage of the network as a noise characterization" },
        { label: "III", text: "It is integrated closely with the TCP/IP stack and watches packets" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "III",
      reason: "Stack-based IDS are integrated into the protocol stack to monitor and analyze network packets directly.",
    },
    {
      number: 36,
      question:
        "If the sum of the working set sizes increases, exceeding the total number of available frames, the operating system _____",
      options: [
        { label: "I", text: "Selects a process to suspend" },
        { label: "II", text: "The system crashes" },
        { label: "III", text: "Then the process crashes" },
        { label: "IV", text: "The memory overflows" },
      ],
      correctAnswer: "I",
      reason:
        "When available memory is exceeded, the OS may suspend a process to free up frames and avoid system instability.",
    },
    {
      number: 37,
      question: "The information about all files is kept in the _____",
      options: [
        { label: "I", text: "Operating system" },
        { label: "II", text: "Separate directory structure" },
        { label: "III", text: "Swap space" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "II",
      reason: "File systems maintain a separate directory structure to store metadata and organize file information.",
    },
    {
      number: 38,
      question:
        "The operating system keeps a small table called the _____ containing information about all open files.",
      options: [
        { label: "I", text: "File table" },
        { label: "II", text: "Directory table" },
        { label: "III", text: "Open-file table" },
        { label: "IV", text: "System table" },
      ],
      correctAnswer: "III",
      reason: "The open-file table is used by the OS to track all files that are currently opened by processes.",
    },
    {
      number: 39,
      question: "What will happen in a single level directory?",
      options: [
        { label: "I", text: "All files are contained in the same directory" },
        { label: "II", text: "All files are contained in different directories all at the same level" },
        { label: "III", text: "Depends on the operating system" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "I",
      reason: "In a single-level directory system, every file is stored in one common directory.",
    },
    {
      number: 40,
      question: "When traversing directory trees, the operating system _____ the acyclic structure to preserve it.",
      options: [
        { label: "I", text: "Deletes links" },
        { label: "II", text: "Ignores links" },
        { label: "III", text: "Considers links" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "II",
      reason:
        "To avoid creating cycles in the directory tree, the OS typically ignores symbolic links when preserving the acyclic structure.",
    },
    {
      number: 41,
      question: "To recover from failures in the network, ______ must be maintained.",
      options: [
        { label: "I", text: "Operating system state" },
        { label: "II", text: "IP address information" },
        { label: "III", text: "Stateless operation" },
        { label: "IV", text: "Stateful information" },
      ],
      correctAnswer: "IV",
      reason: "Maintaining stateful information is essential for recovery procedures and ensuring network resilience.",
    },
    {
      number: 42,
      question:
        "On systems where there are multiple operating systems, the decision to load a particular one is made by the _____",
      options: [
        { label: "I", text: "Process control block" },
        { label: "II", text: "File control block" },
        { label: "III", text: "Boot loader" },
        { label: "IV", text: "Bootstrap" },
      ],
      correctAnswer: "III",
      reason:
        "The boot loader is responsible for selecting and loading the appropriate operating system during startup.",
    },
    {
      number: 43,
      question: "Whenever a process needs I/O to or from a disk, it issues a _____",
      options: [
        { label: "I", text: "System call to the operating system" },
        { label: "II", text: "System call to the CPU" },
        { label: "III", text: "A special procedure" },
        { label: "IV", text: "Bootstrap" },
      ],
      correctAnswer: "I",
      reason:
        "Disk I/O operations are managed by the OS, and processes must invoke system calls to request these services.",
    },
    {
      number: 44,
      question: "The two steps the operating system takes to use a disk to hold its files are _____ and _____",
      options: [
        { label: "I", text: "Caching & logical formatting" },
        { label: "II", text: "Logical formatting & swap space creation" },
        { label: "III", text: "Swap space creation & caching" },
        { label: "IV", text: "Partitioning & logical formatting" },
      ],
      correctAnswer: "IV",
      reason: "Disks are prepared by first partitioning and then applying a logical format to set up the file system.",
    },
    {
      number: 45,
      question:
        "The program that initializes all aspects of the system, from CPU registers to device controllers and main memory, and then starts the operating system is called the _____",
      options: [
        { label: "I", text: "Bootstrap" },
        { label: "II", text: "Main" },
        { label: "III", text: "Bootloader" },
        { label: "IV", text: "ROM" },
      ],
      correctAnswer: "I",
      reason:
        "The bootstrap program is responsible for initializing the system hardware and loading the operating system into memory.",
    },
    {
      number: 46,
      question:
        "In SCSI disks used in high-end PCs, the disk is initialized during _____ formatting, and the controller maintains a list of _____",
      options: [
        { label: "I", text: "Destroyed blocks, partitioning" },
        { label: "II", text: "Destroyed blocks, high level formatting" },
        { label: "III", text: "Bad blocks, low level formatting" },
        { label: "IV", text: "Bad blocks, partitioning" },
      ],
      correctAnswer: "III",
      reason:
        "During low level formatting, the disk is checked for bad blocks which the controller then marks and avoids using.",
    },
    {
      number: 47,
      question:
        "Which principle states that programs, users, and systems should be given just enough privileges to perform their tasks?",
      options: [
        { label: "I", text: "Principle of least privilege" },
        { label: "II", text: "Principle of maximum access" },
        { label: "III", text: "Principle of minimum rights" },
        { label: "IV", text: "Principle of operating system" },
      ],
      correctAnswer: "I",
      reason:
        "The principle of least privilege minimizes security risks by ensuring that no more privileges than necessary are granted.",
    },
    {
      number: 48,
      question: "Network operating system runs on _____",
      options: [
        { label: "I", text: "Every system in the network" },
        { label: "II", text: "Both the server and every system in the network" },
        { label: "III", text: "Only on servers" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "II",
      reason:
        "A network operating system is designed to run on both servers and client systems, managing network resources collectively.",
    },
    {
      number: 49,
      question: "What are the types of distributed operating systems?",
      options: [
        { label: "I", text: "Zone based Operating system" },
        { label: "II", text: "Network Operating system" },
        { label: "III", text: "Level based Operating system" },
        { label: "IV", text: "All of the mentioned" },
      ],
      correctAnswer: "IV",
      reason:
        "Distributed operating systems can be classified in various ways, including zone-based, network-based, and level-based approaches.",
    },
    {
      number: 50,
      question: "In Unix, which system call creates a new process?",
      options: [
        { label: "I", text: "Create" },
        { label: "II", text: "New" },
        { label: "III", text: "Fork" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "III",
      reason:
        "The fork() system call is the standard method in Unix to create a new process by duplicating the calling process.",
    },
  ],
}